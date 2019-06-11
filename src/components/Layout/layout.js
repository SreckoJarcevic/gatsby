import React, { Fragment, useEffect } from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import style from "./layout.module.css"
import Delighters from "./delighters"

const Layout = ({ isGray, children }) => {
  useEffect(() => {
    //for animation - detect when element come into view
    Delighters.init()
  }, [])

  return (
    <Fragment>
      <div className={style.Container}>
        <Header />
        {children}
        <Footer isGray={isGray} />
      </div>
    </Fragment>
  )
}

export default React.memo(Layout)
