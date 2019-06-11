import React from "react"
import GoogleMap from "../GoogleMap/googleMap"
import Input from "../Input/input"
import EzdermInfo from "../Footer/ezdermInfo"
import Button from "../Button/button"
import data from "./data"
import styles from "./contact.module.css"

const contact = () => {
  const { firstTitle, secondTitle } = data[0]
  return (
    <div className={styles.Container}>
      <h1>{firstTitle}</h1>
      <span className="Line" />
      <div className={styles.Info}>
        <EzdermInfo fromContactPage />
        <div className={styles.Map}>
          <GoogleMap />
        </div>
      </div>
      <form className={styles.Form}>
        <h2>{secondTitle}</h2>
        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />
        <textarea placeholder="Comments / Questions" />
        <div className={styles.ButtonWrapper}>
          <Button>SEND MESSAGE</Button>
        </div>
      </form>
    </div>
  )
}

export default contact
