import React, { useState, useEffect } from "react"
import styles from "./productPage.module.css"

const Side = ({ data, side }) => {
  const [isOpen, setIsOpen] = useState()
  const [animate, setAnimate] = useState()

  useEffect(() => {
    //animation
    const startAnimation = setTimeout(setAnimate(true), 1000)
    return () => clearTimeout(startAnimation)
  }, [])

  return (
    <div className={styles.Content}>
      {data.map((e, index) => (
        <div
          className={`${styles.Chunk} ${side === "right" &&
            styles.IconsLeft} ${animate && styles.Animate}`}
          key={e.title}
        >
          <div
            className={`${styles.Text} ${side === "left" && styles.LeftText}`}
          >
            <div className={isOpen !== e.title && styles.Expanded}>
              <h2>{e.title}</h2>
              <p>{e.text}</p>
            </div>
            <button
              onClick={() =>
                isOpen === e.title ? setIsOpen() : setIsOpen(e.title)
              }
            >
              {isOpen === e.title ? "SHOW LESS" : "SHOW MORE"}
            </button>
          </div>
          <div className={styles.Icons}>
            <i className={`fab ${e.icon}`} />
            {/*dont repeat vertical dotted line for last child component*/}
            {data.length - 1 !== index && <p />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Side
