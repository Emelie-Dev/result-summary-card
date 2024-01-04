
import styles from "./aspect.module.css";

function Aspect({icon, score, category}) {

 return(
    
    <div className={`${styles.elem} ${styles[category]}`} >
   
   <img className={styles.img} src={icon} />

   <span >{category}</span>

  <span className={styles.scoreBox}>
   <span className={styles.score}>{score}&nbsp;&nbsp;</span>

   <span className={styles.total}>/&nbsp;100</span>
  
  </span>

    </div>

    )

}

export default Aspect;

