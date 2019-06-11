import React from "react"
import styles from "./videoContainer.module.css"

const Video = ({ videoSrcURL, videoTitle }) => (
  <div>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width="500"
      height="300"
    />
  </div>
)

const videoContainer = ({ title, text, video, side = "right" }) => {
  return (
    <div className={`${styles.Container} ${side === "left" && styles.Left}`}>
      <div className={styles.TextContainer}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.VideoContainer}>
        <Video videoSrcURL={video} videoTitle={"test"} />
      </div>
    </div>
  )
}

export default videoContainer
