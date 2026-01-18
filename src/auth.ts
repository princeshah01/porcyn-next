import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { ROUTES } from "~/shared/constants";

export const PROTECTED_ROUTES = ["/ask", "/collection"];

export const PUBLIC_ROUTES = [
  "/",
  "/feed",
  "/community",
  "/tags",
  "/jobs",
  "/sign-in",
  "/sign-up",
  "/api/auth",
];

export const PROTECTED_EXACT_ROUTES = ["/profile"];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const isLoggedIn = !!auth?.user;

      const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
        pathname.startsWith(route),
      );

      const isExactProtectedRoute = PROTECTED_EXACT_ROUTES.includes(pathname);

      if (isProtectedRoute || isExactProtectedRoute) {
        return isLoggedIn;
      }
      return true;
    },
    redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      try {
        const urlObj = new URL(url);
        if (urlObj.origin === baseUrl) {
          return url;
        }
      } catch {
        return ROUTES.FEED;
      }
      return `${baseUrl}/feed`;
    },
  },
});
