#!/usr/bin/env node

import { PrismaClient } from '../../prisma-client';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient(
  {
    datasources: {
      db: {
        url: "postgresql://prod_user:prod_secure_password_2024@34.87.135.126:5433/prod?schema=public",
      },
    },
  }
);


async function generateReferralTree() {
  try {
    console.log('🌳 Generating referral tree visualization...\n');

    // Fetch all referrals
    const referrals = await prisma.referral.findMany({
      select: {
        referrerId: true,
        referrerTwitterId: true,
        refereeId: true,
        refereeTwitterId: true,
      },
    });

    if (referrals.length === 0) {
      console.log('No referral data found.');
      return;
    }

    // Get all unique user IDs
    const allUserIds = Array.from(new Set([
      ...referrals.map(r => r.referrerId),
      ...referrals.map(r => r.refereeId)
    ]));

    // Fetch user details
    const users = await prisma.user.findMany({
      where: { id: { in: allUserIds } },
      select: {
        id: true,
        twitterId: true,
        handle: true,
      },
    });

    // Create user map
    const userMap = new Map(users.map(u => [u.id, u]));

    // Build adjacency map for level calculation
    const referralMap = new Map<number, number[]>();
    referrals.forEach(ref => {
      if (!referralMap.has(ref.referrerId)) {
        referralMap.set(ref.referrerId, []);
      }
      referralMap.get(ref.referrerId)!.push(ref.refereeId);
    });

    // Calculate referral counts
    const referralCounts = new Map<number, number>();
    referrals.forEach(ref => {
      referralCounts.set(ref.referrerId, (referralCounts.get(ref.referrerId) || 0) + 1);
    });

    // Find root nodes (users who weren't referred by anyone)
    const allReferees = new Set(referrals.map(r => r.refereeId));
    const rootNodes = Array.from(referralMap.keys()).filter(id => !allReferees.has(id));

    // Calculate levels using BFS
    const userLevels = new Map<number, number>();
    const queue: [number, number][] = rootNodes.map(id => [id, 0]);
    const visited = new Set<number>();
    
    

    while (queue.length > 0) {
      const [userId, level] = queue.shift()!;
      if (visited.has(userId)) continue;
      
      visited.add(userId);
      userLevels.set(userId, level);
      
      const referees = referralMap.get(userId) || [];
      referees.forEach(refereeId => {
        if (!visited.has(refereeId)) {
          queue.push([refereeId, level + 1]);
        }
      });
    }
    
    // Set level for any remaining nodes
    allUserIds.forEach(id => {
      if (!userLevels.has(id)) {
        userLevels.set(id, 0);
      }
    });

    // Generate DOT format
    let dotContent = 'digraph ReferralTree {\n';
    dotContent += '  rankdir=TB;\n';
    dotContent += '  node [shape=box, style="rounded,filled", fontname="Arial"];\n';
    dotContent += '  edge [color="#666666", fontcolor="#666666", fontsize=10];\n\n';

    // Group nodes by level for better layout
    const nodesByLevel = new Map<number, number[]>();
    userLevels.forEach((level, userId) => {
      if (!nodesByLevel.has(level)) {
        nodesByLevel.set(level, []);
      }
      nodesByLevel.get(level)!.push(userId);
    });

    // Add rank constraints for each level
    const maxLevel = Math.max(...Array.from(nodesByLevel.keys()));
    for (let level = 0; level <= maxLevel; level++) {
      const nodes = nodesByLevel.get(level) || [];
      if (nodes.length > 0) {
        dotContent += `  { rank=same; ${nodes.join('; ')} }\n`;
      }
    }
    dotContent += '\n';

    // Add nodes with styling based on their properties
    allUserIds.forEach(userId => {
      const user = userMap.get(userId);
      const refCount = referralCounts.get(userId) || 0;
      const level = userLevels.get(userId) || 0;
      const isRoot = rootNodes.includes(userId);
      
      // Node label with handle and stats
      const handle = user?.handle ? `@${user.handle}` : `User ${userId}`;
      const label = `${handle}\\n${refCount} referrals\\nLevel ${level}`;
      
      // Color based on referral count
      let fillColor = '#E3F2FD'; // Light blue for 0 referrals
      if (refCount >= 10) fillColor = '#1976D2'; // Dark blue for 10+ referrals
      else if (refCount >= 5) fillColor = '#42A5F5'; // Medium blue for 5-9 referrals
      else if (refCount >= 1) fillColor = '#90CAF9'; // Light blue for 1-4 referrals
      
      const fontColor = refCount >= 5 ? 'white' : 'black';
      const borderColor = isRoot ? '#FF6B6B' : '#1976D2';
      const borderWidth = isRoot ? 3 : 1;
      
      dotContent += `  ${userId} [label="${label}", fillcolor="${fillColor}", fontcolor="${fontColor}", color="${borderColor}", penwidth=${borderWidth}];\n`;
    });
    
    dotContent += '\n';

    // Add edges
    referrals.forEach(ref => {
      dotContent += `  ${ref.referrerId} -> ${ref.refereeId};\n`;
    });

    dotContent += '}\n';

    // Write to file
    const outputDir = path.join(process.cwd(), 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    const dotFile = path.join(outputDir, `referral-tree-${timestamp}.dot`);
    const statsFile = path.join(outputDir, `referral-stats-${timestamp}.txt`);

    fs.writeFileSync(dotFile, dotContent);

    // Generate statistics file
    let statsContent = '=== REFERRAL TREE STATISTICS ===\n\n';
    statsContent += `Generated: ${new Date().toISOString()}\n`;
    statsContent += `Total Users: ${allUserIds.length}\n`;
    statsContent += `Total Referrals: ${referrals.length}\n`;
    statsContent += `Root Nodes: ${rootNodes.length}\n`;
    statsContent += `Max Level: ${maxLevel}\n\n`;

    // Top referrers
    statsContent += '=== TOP 10 REFERRERS ===\n';
    const sortedReferrers = Array.from(referralCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    
    for (const [userId, count] of sortedReferrers) {
      const user = userMap.get(userId);
      const handle = user?.handle ? `@${user.handle}` : `User ${userId}`;
      statsContent += `${handle}: ${count} referrals\n`;
    }

    // Level distribution
    statsContent += '\n=== LEVEL DISTRIBUTION ===\n';
    for (let level = 0; level <= maxLevel; level++) {
      const nodes = nodesByLevel.get(level) || [];
      statsContent += `Level ${level}: ${nodes.length} users\n`;
    }


    fs.writeFileSync(statsFile, statsContent);

    console.log('✅ Referral tree visualization generated successfully!\n');
    console.log(`📊 DOT file: ${dotFile}`);
    console.log(`📈 Stats file: ${statsFile}\n`);
    console.log('To visualize the graph:');
    console.log('1. Install Graphviz: brew install graphviz (Mac) or apt-get install graphviz (Linux)');
    console.log('2. Generate PNG: dot -Tpng ' + dotFile + ' -o referral-tree.png');
    console.log('3. Generate SVG: dot -Tsvg ' + dotFile + ' -o referral-tree.svg');
    console.log('4. Or use online viewer: https://dreampuf.github.io/GraphvizOnline/\n');

  } catch (error) {
    console.error('Error generating referral tree:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
generateReferralTree();