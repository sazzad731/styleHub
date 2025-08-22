import { NextResponse } from "next/server";
export { default } from "next-auth/middleware"
import { getToken } from "next-auth/jwt";


export const middleware = async (req)=>{
  const token = await getToken({ req })
  const isTokenOk = Boolean(token)
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard")
  if(isProtectedRoute && !isTokenOk){
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }
  return NextResponse.next()
}
