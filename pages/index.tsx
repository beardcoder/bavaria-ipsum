import Head from 'next/head'
import dynamic from 'next/dynamic'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

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

    <Container component="main">
      <main>
        <Typography component="h1" variant="h2">
          Sign in Gris di und hob Spaß beim zambaun von deim Zeig
        </Typography>

        <Blindtext />
      </main>
    </Container>
  </>
)

export default Home
