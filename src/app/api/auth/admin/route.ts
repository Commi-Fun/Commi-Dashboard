import { NextRequest, NextResponse } from 'next/server';
import { AdminAuth, RateLimiter } from '@/lib/auth';

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  try {
    
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limiting
    if (RateLimiter.isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    let { password } = body;
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Verify password
    const isValid = await AdminAuth.verifyPassword(password);

    if (!isValid) {
      // Record failed attempt
      RateLimiter.recordFailedAttempt(ip);
      
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Reset rate limit on successful login
    RateLimiter.resetAttempts(ip);

    // Create admin session
    const payload = {
      role: 'admin' as const,
      timestamp: Date.now()
    };

    // Generate token
    const token = await AdminAuth.generateToken(payload);
    
    // Parse duration for cookie maxAge
    let maxAge = 24 * 60 * 60; // Default 24 hours in seconds
    const duration = process.env.ADMIN_SESSION_DURATION || "24h";
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

    // Create response
    const response = NextResponse.json(
      { 
        success: true,
        message: 'Login successful'
      },
      { status: 200 }
    );
    
    response.cookies.set({
      name: 'admin-token',
      value: token,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: maxAge,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// // GET endpoint to check auth status
// export async function GET() {
//   try {
//     const session = await AdminAuth.getSession();
    
//     if (!session) {
//       return NextResponse.json(
//         { authenticated: false },
//         { status: 401 }
//       );
//     }

//     return NextResponse.json(
//       { 
//         authenticated: true,
//         role: session.role,
//         timestamp: session.timestamp
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Auth check error:', error);
//     return NextResponse.json(
//       { authenticated: false },
//       { status: 500 }
//     );
//   }
// }