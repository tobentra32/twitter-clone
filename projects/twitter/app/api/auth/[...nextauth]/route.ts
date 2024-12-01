import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from "@/app/libs/prismadb";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from "next-auth";


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                //credentials could be undefined, reason for the ?
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('invalid credentials');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user?.hashedPassword ) {
                    throw new Error('Invalid credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword

                );

                if (!isCorrectPassword) {
                    throw new Error('Invalid credentials');
                }

                return user;

            }
        })
    ],

    // turn on debug in deelopment mode

    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
});