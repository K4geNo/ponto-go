import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('@token')?.value
    const role = request.cookies.get('@role')?.value

    const path = request.nextUrl.pathname

    const signUrl = new URL('/login', request.url)
    const dashboardUrl = new URL('/dashboard', request.url)
    const myRecordsUrl = new URL('/meus-registros', request.url)

    switch (path) {
        case '/login':
            if (!token) {
                return NextResponse.next()
            }
            break
        case '/dashboard':
            if (token && role === 'admin') {
                return NextResponse.next()
            }
            break
        case '/meus-registros':
            if (token && role === 'user') {
                return NextResponse.next()
            }
            break
    }

    if (!token) {
        return NextResponse.redirect(signUrl)
    }

    if (role === 'admin') {
        return NextResponse.redirect(dashboardUrl)
    }

    if (role === 'user') {
        return NextResponse.redirect(myRecordsUrl)
    }
}

export const config = {
    matcher: ['/login', '/dashboard', '/meus-registros'],
}
