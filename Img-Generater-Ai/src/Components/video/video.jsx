import React from 'react'
import "./video.css"
import Video from "./video.mp4"
export default function video() {
  return (
    <div className='video'>
        <video src={Video}  autoPlay loop muted></video>
    </div>
  )
}
