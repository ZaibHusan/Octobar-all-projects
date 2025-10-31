import React from 'react'
import './Main.css'
import Vidoecard from '../Videocard/Vidoecard'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useEffect } from 'react'
import { dataContext } from '../../context/Context'
export default function Main({ videoData, catagery, setcatagery }) {


  return (
    <div className="Main">
      <div className="Catagery">
        <ul>
          <li className={catagery === 0 ? "active" : ""} onClick={() => setcatagery(0)}>All</li>
          <li className={catagery === 10 ? "active" : ""} onClick={() => setcatagery(10)}>Music</li>
          <li className={catagery === 17 ? "active" : ""} onClick={() => setcatagery(17)}>Sports</li>
          <li className={catagery === 20 ? "active" : ""} onClick={() => setcatagery(20)}>Gaming</li>
          <li className={catagery === 24 ? "active" : ""} onClick={() => setcatagery(24)}>Fun</li>
          <li className={catagery === 25 ? "active" : ""} onClick={() => setcatagery(25)}>News</li>
          <li className={catagery === 26 ? "active" : ""} onClick={() => setcatagery(26)}>Style</li>
          <li className={catagery === 28 ? "active" : ""} onClick={() => setcatagery(28)}>Tech</li>
          <li className={catagery === 22 ? "active" : ""} onClick={() => setcatagery(22)}>Blogs</li>
          <li className={catagery === 23 ? "active" : ""} onClick={() => setcatagery(23)}>Comedy</li>
          <li className={catagery === 1 ? "active" : ""} onClick={() => setcatagery(1)}>Films</li>
          <li className={catagery === 2 ? "active" : ""} onClick={() => setcatagery(2)}>Autos</li>
          <li className={catagery === 15 ? "active" : ""} onClick={() => setcatagery(15)}>Pets</li>
        </ul>


      </div>
      <div className="video_box">
        {
          videoData.map((video, index) => {
            return (
              <Link key={index} to={`/video/song/${video.id}`}><Vidoecard views={video.statistics.viewCount} time={video.snippet.publishedAt} thumbinal={video.snippet.thumbnails.high.url} title={video.snippet.title} channel_name={video.snippet.channelTitle} views={video.statistics.viewCount} time={video.snippet.publishedAt} channel_id={video.snippet.channelId} /></Link>
            )
          })
        }

      </div>
    </div>
  )
}
