/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2022 | Desenvolvido por BM Bike <img className={styles.logo} src={"/images/bm.png"} height={"32px"} width={"32px"} /></p>
      <div className={styles.icons}>
        <a
          href={"https://www.instagram.com/veloohbike/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/insta.png"
            alt="insta"
            width={"28px"}
            height={"28px"}
            className={styles.instaIcon}
          />
        </a>
        <a
          href={"https://www.facebook.com/veloohbike"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/face.png"
            alt="face"
            width={"28px"}
            height={"28px"}
            className={styles.faceIcon}
          />
        </a>
      </div>
    </footer>
  );
}
