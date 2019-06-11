import React from "react"
import Sides from "./sides"
import Middle from "./middle"
import styles from "./productPage.module.css"

const productPage = ({ left, right, middle, title }) => {
  return (
    <div className={styles.ProductPage}>
      <h1>{title}</h1>
      <span className="Line" />
      <div className={styles.Container}>
        <Sides side={"left"} data={left} />
        <Middle middle={middle} />
        <Sides side={"right"} data={right} />
      </div>
    </div>
  )
}

export default productPage
