import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout"

import localFont from "next/font/local"
import Head from "next/head"

const jopamec = localFont({
  src: 'fonts/jopamec.woff2',
  variable: '--font-jopamec',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jopamec.variable} font-sans`}>
      <Head>
        <link
          rel="preload"
          href="fonts/jopamec.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
