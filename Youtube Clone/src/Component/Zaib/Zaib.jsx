import React from 'react'
import './Zaib.css'
import assets from '../../assets'
import getTimeAgo from '../Videocard/function'
import calculateViews from '../Videocard/Function2'

function Zaib({ video }) {
  if (!video || !video.snippet) return null; // safety check

  const thumbnail =
    video.snippet.thumbnails?.medium?.url ||
    video.snippet.thumbnails?.default?.url ||
    assets.thumbnail;

  const title = video.snippet.title?.slice(0, 60) || "Untitled Video";
  const channelName = video.snippet.channelTitle || "Unknown Channel";
  const views = video.statistics?.viewCount
    ? calculateViews(video.statistics.viewCount)
    : "0";
  const timeAgo = video.snippet.publishedAt
    ? getTimeAgo(video.snippet.publishedAt)
    : "";

  return (
    <div className="Zaib">
      <div className="zaib_box">
        <div className="zaib_Banner">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="zaib_details">
          <div className="zaib_title">
            <p>{title}</p>
          </div>
          <div className="zaib_channel_name">{channelName}</div>
          <div className="zaib_time">
            {views} views • {timeAgo}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zaib
