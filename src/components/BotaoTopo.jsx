/* eslint-disable @next/next/no-img-element */
import styles from "../styles/BotaoTopo.module.css";
import Link from "next/link";

export default function BotaoTopo() {
  return (
    <Link href={'https://www.bmbike.com.br'}>
    <div className={styles.backToTop} href="#"></div>
    </Link>
  );
}
