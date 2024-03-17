import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";

export const {
    handlers: { GET, POST },
    auth, // Dùng phía server
    signIn, // Chỉ dùng server component hoặc server actions
    signOut, // Chỉ dùng server component hoặc server actions
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    ...authConfig,
});
