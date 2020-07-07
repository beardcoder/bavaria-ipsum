import Head from 'next/head'
import dynamic from 'next/dynamic'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Container } from '../components/Elements'
const background = require('../assets/evan-dvorkin-NCmog4xinew-unsplash.jpg')

const BackgroundElement = styled.div`
    background-image: url(${background});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoElement = styled.img`
    height: 300px;
    width: auto;
`

const HeaderElement = styled.header`
    position: relative;
    height: 400px;
`

const Blindtext = dynamic<any>(
    () => import('../components/Blindtext').then((res) => res.Blindtext),
    { ssr: false }
)

export const Home = (): JSX.Element => (
    <>
        <Head>
            <title>Bavaria Ipsum, Blindtext auf bayerisch</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <HeaderElement>
                <BackgroundElement role="presentation">
                    <LogoElement src="./logo.svg" width="235" height="237" />
                </BackgroundElement>
            </HeaderElement>
            <Container>
                <Blindtext />
            </Container>
        </main>
        <Footer />
    </>
)

export default Home
