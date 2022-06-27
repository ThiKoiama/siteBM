import Head from "next/head";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Zap from "../components/Zap";
import Footer from "../components/Footer";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import styles from "../styles/Index.module.css";
import BotaoTopo from "../components/BotaoTopo";

export default function Home() {
  return (
    <div className={styles.index}>
      <Head>
        <title>BM Bike</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="BM Bike" />
        <link rel="icon" href="/images/icon.ico" />
      </Head>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <BotaoTopo />
      <Zap />
      <Footer />
     
    </div>
  );
}
