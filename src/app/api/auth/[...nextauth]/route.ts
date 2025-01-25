import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {

        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60

    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your Email", name: "email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter Password" }

            },
            async authorize(credentials) {

                const { email, password } = credentials;
                if (!credentials) {

                    return null;
                }
                if (email) {

                    const currentUser = users.find((user => user.email === email))

                    if (currentUser) {

                        if (currentUser.password === password) {

                            return currentUser;
                        }
                    }
                }
                return null
            }
        })

    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (account) {
                token.type = user.type

            }
            return token;

        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        },



    },
    pages: {

    }
}

const handler = NextAuth(authOption)


const users = [

    {
        id: 1,
        name: "ammar",
        email: "ammar@gmail.com",
        type: "admin",
        password: "password"
    }


]


export { handler as GET, handler as POST }