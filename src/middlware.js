import { NextResponse } from "next/server";
export { default } from "next-auth/middleware"
import { getToken } from "next-auth/jwt";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const url = request.nextUrl;

  if (
    token &&
    (url.pathname.startsWith("/login") || url.pathname.startsWith("/sign-up"))
  ) {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  if (!token && url.pathname.startsWith("/dashboard/add-product")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/sign-up',
    '/dashboard/:path*'
  ],
};
