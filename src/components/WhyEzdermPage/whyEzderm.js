import React from "react"
import VideoContainer from "./videoContainer"
import { videos, data } from "./data"
import styles from "./videoContainer.module.css"

const whyEzderm = () => {
  const { title, txt1, txt2 } = data
  return (
    <div>
      <div className={styles.WhyEzderm}>
        <h1>{title}</h1>
        <p>{txt1}</p>
        <p>{txt2}</p>
      </div>
      {videos.map(video => (
        <VideoContainer
          video={video.video}
          title={video.title}
          text={video.text}
          side={video.side}
        />
      ))}
    </div>
  )
}

export default whyEzderm
