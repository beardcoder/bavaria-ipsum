import 'normalize.css'
import Head from 'next/head'
import '../styles/index.css'
import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }): JSX.Element {
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
