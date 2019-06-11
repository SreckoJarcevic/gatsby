import React from "react"
import features from "./data"
import styles from "./why.module.css"

export default () => {
  return (
    <div className={styles.WhyContainer}>
      <div className={styles.Introduction} data-delighter>
        <h1>WHY EZDERM</h1>
        <span className="Line" />
        <p>
          EZDERM represents the next-generation software system with
          unparalleled
        </p>
        <p>design and value</p>
      </div>
      <div className={styles.Reasons}>
        {features.map(el => (
          <div>
            <img
              src={el.img}
              alt={el.title}
              className={styles[el.position]}
              data-delighter
            />
            <h2>{el.title}</h2>
            <p>{el.first}</p>
            <p>{el.second}</p>
            <p>{el.third}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
