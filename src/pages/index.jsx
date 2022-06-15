import Head from 'next/head'

import styles from '../styles/Temp.module.css'

export default function Temp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BM Bike</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="BM Bike" />
        <link rel="icon" href="/images/icon.ico" />
      </Head>

      <main className={styles.main}>
      <img src={"/images/logo.png"} width="300x" height="300px" />


      <h1 style={{color:"#28245c", textAlign:"center"}}>EM BREVE!</h1>
      
      </main>
    </div>
  )
}
