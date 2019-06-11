import React from "react"
import styles from "./input.module.css"

const Input = ({ ...rest }) => {
  return <input {...rest} className={styles.Input} />
}

export default React.memo(Input)
