import React, { Fragment } from "react"
import { Link } from "gatsby"
import data from "./data"
import Button from "../Button/button"
import styles from "./products.module.css"

export default function products() {
  return (
    <div className={styles.Container}>
      {data.map(product => (
        <div>
          <img src={product.img} alt={product.txt1} className={styles.Image} />
          <h2>{product.title}</h2>
          <p>{product.txt1}</p>
          <p>{product.txt2}</p>
          <p>{product.txt3}</p>
          <Button>
            <Link to={product.link}>READ MORE</Link>
            <i className="fas fa-chevron-right" />
          </Button>
        </div>
      ))}
    </div>
  )
}
