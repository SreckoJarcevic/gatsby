import React, { useState, useEffect } from "react"
import styles from "./slideshow.module.css"

const images = [
  { url: "anywhere.jpg", title: "USE EZDERM ANYWHERE" },
  {
    url: "drpatient.jpg",
    title: "INTUITIVE TO USE WITH A SHORT LEARNING CURVE",
  },
  { url: "drphisitian.jpg", title: "EFFECTIVELY COMMUNICATE WITH PATIENTS" },
  {
    url: "iPhone_Lady-4.jpg",
    title: "THE ONLY COMPLETE EHR/PM SYSTEM THAT FITS IN THE PALM OF YOUR HAND",
  },
  { url: "Patient.jpg", title: "ENGAGE YOUR PATIENTS" },
  {
    url: "pms_Cindy.jpg",
    title: "MANAGE YOUR ENTIRE PRACTICE WITH ONE SYSTEM",
  },
]

export default function slideShow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [active, setActive] = useState(false)

  function switchImg(num) {
    if (num === -1) {
      currentIndex === 0
        ? setCurrentIndex(images.length - 1)
        : setCurrentIndex(currentIndex - 1)
      return
    }

    currentIndex === images.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }

  useEffect(
    () => {
      setActive(false)
      const test = setTimeout(() => {
        switchImg()
      }, 6000)
      return () => clearTimeout(test)
    },
    [currentIndex]
  )

  useEffect(
    () => {
      const test = setTimeout(() => setActive(true), 10)
      return () => clearTimeout(test)
    },
    [active]
  )

  return (
    <div className={styles.ImgList}>
      {images.map((img, index) => (
        <div
          key={img.title}
          className={`${styles.Slide} ${index === currentIndex &&
            styles.ActiveImg}`}
        >
          <img src={img.url} alt={img.title} />
          <div>
            <span onClick={() => switchImg(-1)}>
              <i className="fas fa-chevron-circle-left" />
            </span>
            <p className={active && styles.Active}>{img.title}</p>
            <span onClick={() => switchImg(1)}>
              <i className="fas fa-chevron-circle-right" />
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
