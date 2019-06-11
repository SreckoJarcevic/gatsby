import React from "react"
import { Link } from "gatsby"
import styles from "./searchPage.module.css"

const SearchPage = ({ data, value }) => {
  return (
    <div className={styles.Container}>
      <h2>SEARCH</h2>
      <span className={`Line ${styles.Span}`} />
      {Object.keys(data).map(url => (
        <div className={styles.Section}>
          <Link to={url}>
            {url.substr(1) ? url.substr(1).toUpperCase() : "MAIN PAGE"}
          </Link>
          {data[url].map(str => {
            let wordIndex = str.toLowerCase().indexOf(value)
            return (
              <div className={styles.TextContainer}>
                ...
                <span>{str.slice(0, wordIndex)}</span> <strong>{value}</strong>
                <span>{str.slice(wordIndex + value.length)}</span>
                ...
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default SearchPage
