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
    password = password?.trim();
    console.log("Obtain password:", password);

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

    // Set session cookie
    await AdminAuth.setSession(payload);

    return NextResponse.json(
      { 
        success: true,
        message: 'Login successful'
      },
      { status: 200 }
    );

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