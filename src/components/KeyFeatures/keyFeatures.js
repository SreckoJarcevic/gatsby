import React, { useState } from "react"
import { icons, iconsMenu, pageData } from "./data"
import styles from "./keyFeatures.module.css"

export default () => {
  const [activeItem, setActiveItem] = useState("EHR")
  const { title, text } = pageData[0]

  const menuClickHandler = event => {
    const active = event.target.innerHTML
    setActiveItem(active)
  }

  return (
    <div className={styles.KeyFeatures}>
      <div className={styles.Title} data-delighter>
        <h1>{title}</h1>
        <span className="Line" />
        <p>{text}</p>
      </div>
      <div className={styles.Features}>
        <ul className={styles.IconsMenu}>
          {iconsMenu.map(item => (
            <li
              className={activeItem === item && styles.Active}
              onClick={menuClickHandler}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.IconContainer}>
          {icons[activeItem].map(icon => (
            <span className={styles.IconsWrapper}>
              <span className={styles.Icons}>
                <i className={`fab ${Object.keys(icon)[0]}`} />
              </span>
              <span>{icon[Object.keys(icon)[0]]}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
