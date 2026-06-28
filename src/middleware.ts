import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export const runtime = 'nodejs'

const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? 'fallback-secret')

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ── Protège les pages admin (sauf login) ──
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = req.cookies.get('admin_token')?.value
    if (!token) return NextResponse.redirect(new URL('/admin/login', req.url))
    try {
      await jwtVerify(token, secret)
    } catch {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  // ── Protège les routes API admin ──
  if (pathname.startsWith('/api/admin') && pathname !== '/api/admin/login') {
    const token = req.cookies.get('admin_token')?.value
    if (!token) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    try {
      await jwtVerify(token, secret)
    } catch {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
