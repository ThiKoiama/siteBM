/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Zap.module.css";

export default function Zap() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511949534534"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={styles.wp}
        src="/images/wpp.png"
        alt="Clique aqui para falar com a gente pelo Whatsapp!"
      />
    </a>
  );
}
