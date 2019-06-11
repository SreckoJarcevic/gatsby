import React, { Fragment, useState } from "react"
import Input from "../Input/input"
import Button from "../Button/button"
import pageData from "./data"
import styles from "./careers.module.css"

const Careers = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: "",
  })

  const { title, text } = pageData[0]

  function handleChange(event) {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    ////
  }

  return (
    <Fragment>
      <img src="career.jpg" alt="career" className={styles.Img} />
      <div className={styles.Careers}>
        <h1>{title}</h1>
        <span className="Line" />
        <p>{text}</p>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <h1 className={styles.Title}>TELL US ABOUT YOURSELF!</h1>
          <div className={styles.InputWrapper}>
            <Input
              placeholder="Full name"
              value={data.fullName}
              name="fullName"
              onChange={handleChange}
            />
            <Input
              placeholder="Email Address"
              type="email"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
            <Input
              placeholder="Phone Number"
              type="number"
              value={data.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className={styles.ButtonWrapper}>
            <label>
              Resume Upload
              <input
                type="file"
                accept="pdf, docx"
                name="upload"
                name="resume"
                onChange={handleChange}
              />
            </label>
            <Button>SUBMIT RESUME</Button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Careers
