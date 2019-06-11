import React, { Fragment, useState } from "react"
import styles from "./header.module.css"
import Nav from "./nav"

const ShortMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <button
        className={styles.ShortMenuIcon}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="menu.svg" alt="short menu" />
      </button>
      {isOpen && <Nav hideNavForShortMenu={setIsOpen} />}
    </Fragment>
  )
}

export default ShortMenu
