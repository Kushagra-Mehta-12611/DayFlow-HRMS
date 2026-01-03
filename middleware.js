import { NextResponse } from 'next/server'

export async function middleware(request) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('sb-access-token')?.value || 
                request.cookies.get('sb-refresh-token')?.value

  // Protect admin and employee routes - basic check
  // Full authentication is handled client-side
  if (pathname.startsWith('/admin') || pathname.startsWith('/employee')) {
    // If no token, redirect to login
    // Note: Full auth check happens in the page components
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

