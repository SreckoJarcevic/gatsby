import React from "react"
import data from "./data"
import styles from "./welcome.module.css"

export default function welcome() {
  const { title, text } = data[0]
  return (
    <div className={styles.Welcome} data-delighter>
      <h1>{title}</h1>
      <span className="Line" />
      <p>{text}</p>
    </div>
  )
}
