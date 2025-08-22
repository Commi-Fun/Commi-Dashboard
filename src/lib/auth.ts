import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from 'next/headers';
import bcrypt from "bcryptjs";

export interface AdminPayload {
  role: 'admin';
  timestamp: number;
}

export class AdminAuth {
  private static readonly ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';
  private static readonly JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'admin-secret-key-change-this';
  private static readonly SESSION_DURATION = process.env.ADMIN_SESSION_DURATION || "24h";
  private static readonly COOKIE_NAME = 'admin-token';

  static async verifyPassword(password: string): Promise<boolean> {
    if (!this.ADMIN_PASSWORD_HASH) {
      console.error('ADMIN_PASSWORD_HASH not configured');
      return false;
    }
    try {
      return await bcrypt.compare(password, this.ADMIN_PASSWORD_HASH);
    } catch (error) {
      console.error('Password verification error:', error);
      return false;
    }
  }

  static async generateToken(payload: AdminPayload): Promise<string> {
    const secret = new TextEncoder().encode(this.JWT_SECRET);
    const alg = 'HS256';
    
    const jwt = await new SignJWT({ ...payload })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime(`${this.SESSION_DURATION}`)
      .sign(secret);
    
    return jwt;
  }

  static async verifyToken(token: string): Promise<AdminPayload | null> {
    try {
      const secret = new TextEncoder().encode(this.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret, {
        algorithms: ['HS256']
      });
      return { role: payload.role, timestamp: payload.timestamp } as AdminPayload;
    } catch (error) {
      console.error('Token verification error:', error);
      return null;
    }
  }

  static async getSession(): Promise<AdminPayload | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get(this.COOKIE_NAME);
    
    if (!token) {
      return null;
    }
    
    return await this.verifyToken(token.value);
  }

  static async setSession(payload: AdminPayload): Promise<void> {
    const token = await this.generateToken(payload);
    const cookieStore = await cookies();
    
    // Parse duration string (e.g., "24h" -> 24 hours in seconds)
    let maxAge = 24 * 60 * 60; // Default to 24 hours in seconds
    const duration = this.SESSION_DURATION;
    if (typeof duration === 'string') {
      const match = duration.match(/^(\d+)([hms])$/);
      if (match) {
        const value = parseInt(match[1]);
        const unit = match[2];
        if (unit === 'h') maxAge = value * 60 * 60;
        else if (unit === 'm') maxAge = value * 60;
        else if (unit === 's') maxAge = value;
      }
    }
    
    cookieStore.set(this.COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: maxAge,
      path: '/'
    });
  }

  static async clearSession(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(this.COOKIE_NAME);
  }

  static async isAuthenticated(): Promise<boolean> {
    const session = await this.getSession();
    return session !== null;
  }
}

// Rate limiting helper
interface RateLimitEntry {
  attempts: number;
  lastAttempt: number;
  blockedUntil?: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

export class RateLimiter {
  private static readonly MAX_ATTEMPTS = 5;
  private static readonly WINDOW_MS = 15 * 60 * 1000; // 15 minutes
  private static readonly BLOCK_DURATION_MS = 60 * 60 * 1000; // 1 hour

  static isRateLimited(ip: string): boolean {
    const entry = rateLimitMap.get(ip);
    
    if (!entry) {
      return false;
    }
    
    const now = Date.now();
    
    // Check if blocked
    if (entry.blockedUntil && entry.blockedUntil > now) {
      return true;
    }
    
    // Reset if window expired
    if (now - entry.lastAttempt > this.WINDOW_MS) {
      rateLimitMap.delete(ip);
      return false;
    }
    
    return entry.attempts >= this.MAX_ATTEMPTS;
  }

  static recordFailedAttempt(ip: string): void {
    const now = Date.now();
    const entry = rateLimitMap.get(ip) || { attempts: 0, lastAttempt: now };
    
    entry.attempts++;
    entry.lastAttempt = now;
    
    if (entry.attempts >= this.MAX_ATTEMPTS) {
      entry.blockedUntil = now + this.BLOCK_DURATION_MS;
    }
    
    rateLimitMap.set(ip, entry);
  }

  static resetAttempts(ip: string): void {
    rateLimitMap.delete(ip);
  }
}