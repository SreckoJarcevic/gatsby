import React, { useState, useEffect } from "react"
import styles from "./theySay.module.css"
import statements from "./data"

export default () => {
  const [current, setCurrent] = useState(0)

  function switchStatement(num) {
    if (num === -1) {
      current === 0
        ? setCurrent(statements.length - 1)
        : setCurrent(current - 1)
      return
    }
    current === statements.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  useEffect(
    () => {
      const circle = setTimeout(() => switchStatement(), 10000)
      return () => clearTimeout(circle)
    },
    [current]
  )

  return (
    <div className={styles.TheyContainer}>
      <h1>THEY SAY</h1>
      <span className="Line" />
      <div className={styles.Statements}>
        <p>{statements[current].text}</p>
        <p>{statements[current].name}</p>
      </div>
      <div className={styles.ButtonContainer}>
        <i className="far fa-caret-square-left" onClick={switchStatement} />
        <i
          className="far fa-caret-square-right"
          onClick={() => switchStatement(-1)}
        />
      </div>
    </div>
  )
}
