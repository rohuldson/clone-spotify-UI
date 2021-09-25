import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify - Jacob Banks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://open.spotify.com/artist/0AepkoQhYvkjEzzwIcGxdV">Spotify!</a>
        </h1>

        
      </main>


      <Footer />
      
    
    </div>
  )
}
