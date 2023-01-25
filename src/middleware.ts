import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let verify = request.cookies.get("username");

  if (verify) {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.rewrite(new URL("/movies", request.nextUrl));
    }
    return NextResponse.next();
  } else {
    return NextResponse.rewrite(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/movies/:path*", "/movies"],
// };
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|/|_next/static|_next/image|favicon.ico).*)",
  ],
};
