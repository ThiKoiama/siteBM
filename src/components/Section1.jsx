import styles from "../styles/Section1.module.css";

export default function Section1() {
  return (
    <div className={styles.section1}>
      <h1>BM Bike</h1>
      <p>Ajudando você a chegar mais longe</p>

      <div className={styles.parallax}></div>

      <div id="sobre" className={styles.sobre}>
        <h2>Sobre</h2>
        <div className={styles.sobreTxt}>
        <h3>Nossa missão:</h3>
        <p>Unidos com o propósito de transformar pessoas e entregar qualidade e satisfação aos nossos clientes.</p>
        </div>
        <div className={styles.sobreTxt}>
        <h3>Visão:</h3>
        <p>Ser a empresa referência em inovações e soluções de problemas existentes no segmento de duas rodas.</p>
        </div>
        <div className={styles.sobreTxt}>
        <h3>Nossos valores:</h3>
        <p>Humildade/Honestidade/Atitude de dono/Melhoria Contínua/Empatia/Gratidão</p>
        </div>
        
      </div>
      <div className={styles.parallax2}></div>
    </div>
  );
}
