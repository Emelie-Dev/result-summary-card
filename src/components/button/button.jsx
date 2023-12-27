/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import styles from "./button.module.css";

const Button = ({label, type}) => {
    return(
        <button className={`${styles.button} ${type === "primary" ? styles.primary : null}`}>
            {label}
        </button>
    )
}



export default Button;