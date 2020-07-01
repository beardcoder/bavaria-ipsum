import 'normalize.css'
import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Sedgwick+Ave&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  )
}

export default MyApp