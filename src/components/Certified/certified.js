import React from "react"
import styles from "./certified.module.css"
import { Link } from "gatsby"

const Certified = () => {
  return (
    <div className={styles.Certified}>
      <h1>FULLY CERTIFIED</h1>
      <span className="Line" />
      <div className={styles.ImgContainer}>
        <Link to="fully-certified">
          <img
            src="drummond-logo.png"
            alt="drummond logo"
            data-delighter
            className={styles.Left}
          />
        </Link>
        <Link to="fully-certified">
          <img
            src="surescripts-logo.png"
            alt="superscripts logo"
            data-delighter
            className={styles.Right}
          />
        </Link>
      </div>
    </div>
  )
}

export default Certified
