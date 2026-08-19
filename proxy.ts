import { NextRequest, NextResponse } from "next/server";

const ORGANIZE_HOSTS = new Set([
  "organize.siquieroli.com",
  "organize.localhost:3000",
  "organize.localhost",
]);

function isOrganizeHost(host: string): boolean {
  return ORGANIZE_HOSTS.has(host) || host.startsWith("organize.");
}

function isOrganizePath(pathname: string): boolean {
  return pathname === "/organize" || pathname.startsWith("/organize/");
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  if (isOrganizeHost(host)) {
    if (!isOrganizePath(pathname)) {
      url.pathname = "/organize";
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  if (isOrganizePath(pathname)) {
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
