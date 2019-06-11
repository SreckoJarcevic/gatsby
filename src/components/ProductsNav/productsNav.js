import React from "react"
import { Link } from "gatsby"
import styles from "./productsNav.module.css"

const productsNav = () => {
  return (
    <div className={styles.Nav}>
      <Link to="ehr">EHR</Link>
      <Link to="pms">PMS</Link>
      <Link to="check-in-kiosk">KIOSK</Link>
      <Link to="patient-portal">PORTAL</Link>
    </div>
  )
}

export default productsNav
