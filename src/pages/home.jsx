import Head from 'next/head'
import Header from "../components/Header"
import Section1 from "../components/Section1"
import Zap from '../components/Zap'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>BM Bike</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="BM Bike" />
        <link rel="icon" href="/images/icon.ico" />
      </Head>
      <Header />
      <Section1 />
      <Footer />
      <Zap />
    </div>
  )
}
