# Referral Tree CLI Tool

A command-line utility to generate offline referral tree visualizations in Graphviz DOT format.

Available in both **Node.js/TypeScript** and **Python** implementations.

## Overview

This tool generates a comprehensive referral network visualization that can be rendered as high-quality images or interactive graphs. It's designed for offline analysis and doesn't impact the web dashboard performance.

## Features

- **Complete Network Graph**: Shows all referral relationships
- **Visual Hierarchy**: Color-coded nodes based on referral activity
- **Level-based Layout**: Organized by referral depth
- **Statistical Analysis**: Comprehensive stats about the referral network
- **Multiple Output Formats**: DOT file for graph visualization + text stats

## Usage

### Node.js/TypeScript Version
```bash
# From the dashboard directory
pnpm referral-tree

# Or run directly
npx tsx src/cli/generateReferralTree.ts
```

### Python Version
```bash
# From the dashboard directory
pnpm referral-tree-py

# Or run directly (after installing dependencies)
cd src/cli
pip install -r requirements.txt
python3 generateReferralTree.py
```

## Requirements

### Node.js Version
- Node.js 18+
- tsx (included as dev dependency)
- Access to PostgreSQL database

### Python Version
- Python 3.8+
- Dependencies (install with `pip install -r requirements.txt`):
  - `psycopg2-binary`: PostgreSQL adapter
  - `python-dotenv`: Environment variable loading

## Implementation Differences

Both versions produce identical output but use different approaches:

| Feature | Node.js/TypeScript | Python |
|---------|-------------------|---------|
| **Database Access** | Prisma ORM | Raw SQL with psycopg2 |
| **Type Safety** | Full TypeScript types | Type hints |
| **Memory Usage** | V8 engine optimization | Python memory management |
| **Performance** | Fast for I/O operations | Excellent for data processing |
| **Dependencies** | Prisma, tsx | psycopg2, python-dotenv |
| **Ecosystem** | Integrated with monorepo | Standalone Python script |

**Choose Node.js version** if:
- You prefer type safety and IDE support
- You want consistency with the rest of the project
- You're already using the Node.js environment

**Choose Python version** if:
- You prefer Python for data analysis
- You want minimal dependencies
- You need standalone script execution
- You're more comfortable with Python syntax

## Output Files

The tool generates two files in the `output/` directory:

### 1. DOT Graph File (`referral-tree-YYYY-MM-DD.dot`)
- Graphviz DOT format for network visualization
- Nodes represent users with handles and referral counts
- Edges show referral relationships
- Color-coded by activity level

### 2. Statistics File (`referral-stats-YYYY-MM-DD.txt`)
- Total users and referrals count
- Top 10 referrers leaderboard
- Level distribution analysis
- Longest referral chain details

## Visualization Options

### 1. Command Line (requires Graphviz)
```bash
# Install Graphviz
brew install graphviz          # macOS
sudo apt-get install graphviz  # Ubuntu/Debian
winget install graphviz        # Windows

# Generate PNG image
dot -Tpng referral-tree-YYYY-MM-DD.dot -o referral-tree.png

# Generate SVG (scalable)
dot -Tsvg referral-tree-YYYY-MM-DD.dot -o referral-tree.svg

# Generate PDF
dot -Tpdf referral-tree-YYYY-MM-DD.dot -o referral-tree.pdf
```

### 2. Online Viewer
- Visit: https://dreampuf.github.io/GraphvizOnline/
- Copy-paste the DOT file content
- Instantly view and export the graph

### 3. Desktop Applications
- **Graphviz GUI**: Native Graphviz viewer
- **yEd**: Professional graph editor (can import DOT files)
- **Gephi**: Advanced network analysis tool

## Node Color Coding

- **Red Border**: Root users (originators who weren't referred)
- **Blue Border**: Regular users
- **Fill Colors by Referral Count**:
  - Light Blue: 0 referrals
  - Medium Blue: 1-4 referrals  
  - Darker Blue: 5-9 referrals
  - Dark Blue: 10+ referrals (white text)

## Graph Layout

- **Top-Down**: Root users at top, referees below
- **Level Grouping**: Users at same referral depth are aligned
- **Directional Arrows**: Show referral flow direction

## Use Cases

1. **Network Analysis**: Understand referral patterns and viral spread
2. **Influencer Identification**: Find key nodes driving growth
3. **Campaign Optimization**: Analyze referral chain effectiveness
4. **Reporting**: Generate visual reports for stakeholders
5. **Research**: Study network topology and growth patterns

## Performance

- **Efficient**: Processes thousands of referrals quickly
- **Scalable**: Works with large referral networks
- **Offline**: No web server resources used
- **Flexible**: Multiple output formats for different needs

## Example Output

```
🌳 Generating referral tree visualization...

✅ Referral tree visualization generated successfully!

📊 DOT file: output/referral-tree-2024-01-15.dot
📈 Stats file: output/referral-stats-2024-01-15.txt

To visualize the graph:
1. Install Graphviz: brew install graphviz
2. Generate PNG: dot -Tpng output/referral-tree-2024-01-15.dot -o referral-tree.png
3. Or use online viewer: https://dreampuf.github.io/GraphvizOnline/
```

## Troubleshooting

1. **Empty Graph**: Check if referral data exists in database
2. **Large Networks**: Use SVG format for better performance with many nodes
3. **Layout Issues**: Try different Graphviz engines (`neato`, `fdp`, `circo`)
4. **Memory Issues**: Consider filtering to top N referrers for very large networks