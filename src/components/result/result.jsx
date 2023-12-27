
import styles from "./result.module.css";
import Circle from './circle'

function Result() {

 return(

    <section className={styles["div-bg"]}>
   
    <p className={styles.result}>Your Result</p>
    <Circle />

    <h2 className={styles.great}>Great</h2>

    <p className={styles.footerText}> 
    You scored higher than 65% of the people who have taken these tests.
    </p>

    </section>
    )

  
}

export default Result;