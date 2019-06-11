import React from "react"
import styles from "./productPage.module.css"

const Middle = ({ middle }) => {
  return (
    <div className={styles.Image}>
      <img src={middle} alt={"random"} />
    </div>
  )
}

export default Middle
