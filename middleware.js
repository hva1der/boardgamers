// middleware to check if users are logged in on paths /membersArea
// and if they have admin access for /admin path
import { NextResponse } from "next/server";

// Jose to deal with JWT, ref: https://www.npmjs.com/package/jose
const jose = require("jose");

// set secretKey to uint8Array (required by jose)
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

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
    // store isAdmin property
    const isAdmin = decoded.payload.isAdmin;

    // regulate adminArea access - checks path to admin area and isAdmin (redirects to /home if NOT admin) property
    if (request.nextUrl.pathname.startsWith("/membersArea/admin") && !isAdmin) {
      // request.nextUrl.pathname returns the path being accessed - ex: /membersArea/admin
      return NextResponse.redirect(new URL("/", request.url));
    }

    // if decoded token is valid: allow user to proceed to members' area pages
    if (decoded) {
      return;
    }
  } catch (err) {
    console.error(err);
    // if error: redirect to home
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// set middleware to run only on the members area paths :path* here matches any path that starts /membersArea/
export const config = {
  matcher: "/membersArea/:path*",
};

// NOTES:
// In future will add functionality to provide guidance to users, rather than just redirecting.
// For now this info/guidance is in the FAQ seciton of the website (which anyone can access)
