// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// import { i18n } from "../i18n-config";

// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// function getLocale(request: NextRequest): string | undefined {
//   // Negotiator expects plain object so we need to transform headers
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.locales;

//   // Use negotiator and intl-localematcher to get best locale
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales
//   );

//   const locale = matchLocale(languages, locales, i18n.defaultLocale);

//   return locale;
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const pathnameHasLocale = i18n.locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return;

//   // Redirect if there is no locale
//   const locale = getLocale(request);
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return Response.redirect(request.nextUrl);
// }

// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ["/((?!api|_next|favicon.ico|.*.svg|.*.png).*)"],
// };
import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { cookieName, fallbackLng, languages } from "./i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|.*.svg|.*.png|.*.jpg|favicon.ico|sw.js).*)",
  ],
};

export function middleware(req: NextRequest) {
  let lng: any;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }
  if (req.headers.has("referer")) {
    const lngInReferer = languages.find((l) =>
      req.nextUrl.pathname.startsWith(`/${l}`)
    );

    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
