import React, { Fragment } from "react"
import data from "./data"
import styles from "./privacy.module.css"

const privacy = () => {
  const { mainTitle, txt1, txt2, txt3 } = data[0]
  return (
    <div className={styles.Container}>
      <h1>{mainTitle}</h1>
      <span className="Line" />
      <section>
        <p>{txt1}</p>
        <p>{txt2}</p>
        <p>{txt3}</p>
        {data.map(
          node =>
            node.title && (
              <Fragment>
                <h2>{node.title}</h2>
                <p>{node.txt1}</p>
                {node.txt2 && <p>{node.txt2}</p>}
                {node.txt3 && <p>{node.txt3}</p>}
              </Fragment>
            )
        )}
      </section>
    </div>
  )
}

export default privacy
