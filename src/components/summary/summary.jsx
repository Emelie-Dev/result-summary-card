
// import React from "react";

import Aspect from "./aspect";
import Button from "../button/button";

import styles from "./summary.module.css";

const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];
  

function Summary() {

 return(
    
    <section className={styles.summarySection}>
    
    <h3 className={styles.summary}>Summary</h3>

  {

  data.map(({icon, score, category}, index) => {
   
    return <Aspect key={index} icon={`src/${icon}`} category={category} score={score}  />

  })
  
  }

  <Button 
    label = "Continue"
    type = "primary"
  />

    </section>
    )

}

export default Summary;

