
import styles from "../styles/Section1.module.css"


export default function Section1() {
  return (
     
     <div className={styles.section1}>
            <h1>BM BIKE</h1>
            <p>Ajudando você a chegar mais longe</p>
        
                <div className={styles.parallax}></div>
      
           
            <div id="sobre" className={styles.sobre}>
                <h2>Sobre</h2>
                <p>O(A) BM Bike foi fundado(a) em 2000 com uma missão: trazer um(a) Loja de bicicletas de qualidade para a área de São Paulo. Nossa paixão por excelência é o que nos inspira desde o começo e continua nos motivando até hoje. Temos orgulho na experiência de compra que oferecemos e nos relacionamentos de longo prazo que construímos com nossos clientes. Venha nos visitar e veja por com seus próprios olhos!</p>

            </div>
            <div className={styles.parallax2}></div>
     </div>
 
  )
}
