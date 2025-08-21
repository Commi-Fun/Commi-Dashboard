import { NextResponse } from 'next/server';
import { AdminAuth } from '@/lib/auth';

export async function POST() {
  try {
    // Clear the admin session
    await AdminAuth.clearSession();

    return NextResponse.json(
      { 
        success: true,
        message: 'Logged out successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}