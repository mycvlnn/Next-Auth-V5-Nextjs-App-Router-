import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { NextResponse } from "next/server";

import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "@/routes";

const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
    const { nextUrl } = req;
    console.log({ req, nextUrl });
    console.log({ auth: req.auth });

    const isLoggedIn = !!req.auth; // Biến dùng để kiểm tra xem đã login hay chưa

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    // Trong trường hợp truy cập vào api thì return luôn
    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    // Trường hợp truy cập vào trang login, register thì di chuyển đến màn hình settings
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }

        return NextResponse.next();
    }

    // Nếu trong trường hợp chưa login mà cố tình truy cập màn hình protected -> Di chuyển đến màn hình login
    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL("/auth/login", nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    // This regex to invoke middleware
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // https://clerk.com/docs/references/nextjs/auth-middleware#example
};
