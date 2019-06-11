import React from "react"
import styles from "./social.module.css"

const Social = () => {
  return (
    <div className={styles.Social}>
      <h1>GET SOCIAL WITH US</h1>
      <span className="Line" />
      <div className={styles.LinksContainer}>
        <a
          href="https://www.facebook.com/ezderm/"
          target="_blank"
          rel="noopener noreferrer"
          data-delighter
          className={styles.Left}
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="https://twitter.com/ezDerm"
          target="_blank"
          rel="noopener noreferrer"
          data-delighter
          className={styles.Center}
        >
          <i className="fab fa-twitter-square" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCa5tPMkW2r3o10R7lWQUeZw"
          target="_blank"
          rel="noopener noreferrer"
          data-delighter
          className={styles.Center}
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          href="https://www.linkedin.com/company/ezderm"
          target="_blank"
          rel="noopener noreferrer"
          data-delighter
          className={styles.Right}
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Social
