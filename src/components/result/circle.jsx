
import styles from "./circle.module.css";

function Circle() {

 return(

    <div className={styles.circle}>
 
     <span className={styles.score}>76</span>
   
     <span className={styles.scoreTxt}>of 100</span>
      
    </div>
    )

}

export default Circle;