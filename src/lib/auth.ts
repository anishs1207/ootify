import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      gender?: "M" | "F";
      occasions?: string[];
    };
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      // Always redirect to dashboard after sign-in
      return `${baseUrl}/dashboard`;
    },

    async signIn({ user }) {
      if (!user?.email) return false;

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name ?? "",
            occasions: [],
            image: user.image ?? "",
          },
        });
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        if (dbUser) token.userId = dbUser.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.userId) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.userId },
        });
        session.user = {
          ...session.user,
          id: token.userId,
        };
      }
      return session;
    },
  },
};
