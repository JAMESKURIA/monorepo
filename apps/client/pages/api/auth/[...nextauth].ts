import { httpClient } from 'apps/client/lib/axios'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { username, password, key } = credentials as any

                console.log('Values: ', { username, password })
                if (key === 'login') {
                    try {
                        const { data } = await httpClient.post(
                            '/login/request/otp',
                            {
                                username,
                                password,
                                clientId: process.env.CLIENT_ID,
                                clientSecret: process.env.CLIENT_SECRET,
                                grantType: process.env.LOGIN_GRANT_TYPE,
                            }
                        )

                        console.log('Login successfull: ', data)

                        return data
                    } catch (error) {
                        console.log('Error request otp: ', error)

                        return null
                    }
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/?auth='signIn'",
    },
}

export default NextAuth(authOptions)
