import { type NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers";

export default async function middleware(req: NextRequest) {
    const protectedRoutes = ['/basket']
    const currentPath = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(currentPath)

    if (isProtectedRoute) {
        const isAuth = cookies().get("session")?.value
        if (!isAuth) {
            return NextResponse.redirect(new URL('/auth', req.nextUrl))
        }
    }
    return NextResponse.next()
}