import React from "react";
import styles from "./button.module.css";

 const Button = ({label, type}) =>  {

    return(

        
 <button type="button" className={`${styles.button} ${type === "primary" && styles.primary}`}>

            {label}
            
 </button>


    )
    }



export default Button;