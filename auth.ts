import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { getUserByID } from "./data/user";

export const {
    handlers: { GET, POST },
    auth, // Dùng phía server
    signIn, // Chỉ dùng server component hoặc server actions
    signOut, // Chỉ dùng server component hoặc server actions
} = NextAuth({
    callbacks: {
        async signIn({ user }) {
            return true;
        },
        async session({ token, session }) {
            if (session.user) {
                if (token.sub) session.user.id = token.sub;

                if (token.role) session.user.role = token.role;
            }

            return session;
        },

        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserByID(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;

            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    ...authConfig,
});
