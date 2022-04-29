import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="https://res.cloudinary.com/tutcan/image/upload/v1650240701/little%20brother/icon.png" />
    </Head>
  <Component {...pageProps} />
  
  </>
  )
}

export default MyApp
