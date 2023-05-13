// middleware to check if users are logged in on paths /membersArea
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
const jose = require("jose");

// set secretKey to uint8Array
const secretKey = new TextEncoder().encode("€");

// This function can be marked `async` if using `await` inside
export async function middleware(request, context) {
  try {
    // get jwt token from cookies
    const cookie = await request.cookies.get("token");
    // if no cookie: redirect
    if (!cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    // decode jwt token from cookie
    const decoded = await jose.jwtVerify(cookie.value, secretKey);
    // if decoded token is invalid: redirect
    if (decoded) {
      console.log(decoded);
      return;
    }
  } catch (err) {
    console.error(err);
    // if error: redirect
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// set middleware to run only on the members area paths :path* here matches any path that starts /membersArea/
export const config = {
  matcher: "/membersArea/:path*",
};
