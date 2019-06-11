import React from "react"
import { Link } from "gatsby"
import styles from "./videos.module.css"

const videos = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <h1>DON’T JUST TAKE OUR WORD FOR IT!</h1>
        <span className="Line" />
        <p>Discover what our happy clients have to say about EZDERM.</p>
      </div>
      <div className={styles.VideosContainer}>
        <div className={styles.Left}>
          <Link to="why-ezderm">
            <img
              src="Debra-Price-MD-Faad.jpg"
              alt="Debra Price"
              className={styles.Debra}
              data-delighter
            />
          </Link>
          <Link to="why-ezderm">
            <img
              src="Delilah-Alonso-MD-FAAD.jpg"
              alt="Delilah Alonso"
              className={styles.Delilah}
              data-delighter
            />
          </Link>
          <Link to="why-ezderm">
            <img
              src="Francisco-FloresMDFAAD.jpg"
              alt="Francisco Flores"
              className={styles.Francisco}
              data-delighter
            />
          </Link>
        </div>
        <div className={styles.Center}>
          <img
            src="expanding_images_laptop.png"
            alt="Monitor"
            className={styles.Monitor}
          />
          <Link to="why-ezderm" className={styles.EmptyLink} />
        </div>
        <div className={styles.Right}>
          <Link to="why-ezderm">
            <img
              src="Martin-ZIac-MD-FAAD.jpg"
              alt="Martin ZIac"
              className={styles.Martin}
              data-delighter
            />
          </Link>
          <Link to="why-ezderm">
            <img
              src="Sari-Fien-Md-FAAD.jpg"
              alt="Sari Fien"
              className={styles.Sari}
              data-delighter
            />
          </Link>
          <Link to="why-ezderm">
            <img
              src="TJ-Giuffrida-MD-FAAD.jpg"
              alt="TJ Giuffrida"
              className={styles.Tj}
              data-delighter
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default videos
