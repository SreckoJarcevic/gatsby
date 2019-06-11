import React from "react"
import styles from "./button.module.css"

const Button = props => {
  return (
    <button className={styles.Button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default React.memo(Button)
