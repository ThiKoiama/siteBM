import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
      <img src="/images/logo.png" alt="logo" height={"120px"} width={"120px"} style={{cursor: 'pointer'}} />
      </Link>
      <hr />
      <nav>
        <ul>
          <Link href={"#sobre"}>
            <li>
              <a>Sobre</a>
            </li>
          </Link>
          <Link href={"#produtos"}>
            <li>
              <a>Produtos</a>
            </li>
          </Link>

          <Link href={"#contato"}>
            <li>
              <a>Entre em contato</a>
            </li>
          </Link>
          <li>
            <a
              href={"https://www.velooh.com.br/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Velooh
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
