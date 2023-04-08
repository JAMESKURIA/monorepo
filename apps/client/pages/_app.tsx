import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import Layout from '../components/layout'
import '../styles/globals.css'

function CustomApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient())

    React.useEffect(() => {
        import('preline')
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider session={pageProps.session}>
                <Head>
                    <title>Welcome to client!</title>
                </Head>

                <Layout>
                    <main className="dark:bg-slate-900 flex flex-col h-full">
                        <Component {...pageProps} />
                    </main>
                </Layout>
            </SessionProvider>
        </QueryClientProvider>
    )
}

export default CustomApp
