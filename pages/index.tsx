import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from './index.module.css'

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

    <main className={styles.container}>
      <h1>Gris di und hob Spaß beim zambaun von deim Zeig</h1>
      <Blindtext />
    </main>
  </>
)

export default Home
