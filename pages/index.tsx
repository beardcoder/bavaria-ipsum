import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from './index.module.css'
const background = require('../assets/evan-dvorkin-NCmog4xinew-unsplash.jpg')

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
      <header className={styles.header}>
        <div role="presentation" className="background">
          <img
            src="./logo.svg"
            width="235"
            height="237"
            className={styles.logo}
          />
        </div>
        <style jsx>{`
          .background {
            background-image: url(${background});
            height: 100%;
            width: 100%;
            background-size: cover;
            background-position: center center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </header>
      <div className={styles.container}>
        <Blindtext />
      </div>
    </main>
  </>
)

export default Home
