import styles from './hero.module.css'
import { Link } from 'react-router-dom';

function Hero(){
  return(
    <div className={styles.container}>
        <img className={styles.image} src ="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/Konohagakure.jpg" />
    <div className={styles.content}>
        <h1>Konoha Village</h1>
        <p className={styles.text}>The Hidden Leaf Village is the first village that was ever formed by Shinobi.
                                   <br/><br/> The Senju and Uchiha clan had been rivals for years before they came to an agreement with the help of Hashirama Senju and Madara Uchiha. 
                                   <br/><br/> The two of them built a village together and called it the Hidden Leaf Village (Konoha).</p>
                                   
       <Link to="/buyNow" className={styles.button}>Buy Now</Link>
    </div>
    </div>
  )
}
export default Hero;