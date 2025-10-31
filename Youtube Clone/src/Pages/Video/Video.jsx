import React, { use } from 'react'
import './Video.css'
import assets from '../../assets'
import Comment from '../../Component/comment/Comment'
import Zaib from '../../Component/zaib/Zaib'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useContext } from 'react'
import { useEffect } from 'react'
import { dataContext } from '../../context/Context'

export default function Video() {
  const { setId, videoFullInfo, comments, videoData } = useContext(dataContext);
  const { id } = useParams()
  useEffect(() => {
    setId(id)

  }, [id])
  useEffect(() => {
    console.log("the data of video", videoData)
  }, [videoData])


  // ✅ Add loading state
  if (!videoFullInfo) {
    return <div>Loading video data...</div>;
  }




  //  const FUlldata = {
  //               decription: data.items[0].snippet.description.slice(0, 100),
  //               Title: data.items[0].snippet.title,
  //               Channel_name: data.items[0].snippet.channelTitle,
  //               Like: data.items[0].statistics.likeCount,
  //               View: calculateViews(data.items[0].statistics.viewCount),
  //               Ncomments: data.items[0].statistics.commentCount,
  //               ChannelProfile: channel.items[0].snippet.thumbnails.medium.url,
  //               UploadingTime: getTimeAgo(data.items[0].snippet.publishedAt),
  //               comments: comment,
  //               subscriberCount: calculateViews(subscriberCount)
  //           }

  return (
    <div className="Video">
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>



      </div>
      <div className="video_details">
        <div className="video_part">
          <div className="video_part1">
            <div className="title">
              <h3>{videoFullInfo ? videoFullInfo.Title : ""}</h3>
            </div>
            <div className="profile_icon">
              <div className="porfile">
                <img src={videoFullInfo ? videoFullInfo.ChannelProfile : ""} alt="" />
                <div className="channel">
                  <h2>{videoFullInfo ? videoFullInfo.Channel_name : ""}</h2>
                  <p>{videoFullInfo ? videoFullInfo.subscriberCount : ""} subscribers</p>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profile_icons">
                <div className="like">
                  <img className='invert' src={assets.like} alt="" />
                  <p>{videoFullInfo ? videoFullInfo.Like : ""}</p>
                </div>
                <div className="share">
                  <img className='invert' src={assets.share} alt="" />
                  <p>{videoFullInfo ? videoFullInfo.Like : ""} Share</p>
                </div>
                <div className="download">
                  <img className='invert' src={assets.download} alt="" />
                  <p>Download</p>
                </div>
                <div className="clips">
                  <img className='invert' src={assets.cut} alt="" />
                  <p>Clips</p>

                </div>
                <div className="other">
                  <img className='invert' src={assets.other} alt="sdfds" />
                </div>
              </div>
            </div>
            <div className="description">
              <p>
                {videoFullInfo ? videoFullInfo.View : ""} &nbsp;&nbsp;&nbsp; {videoFullInfo ? videoFullInfo.UploadingTime : ""} #Love Is in The Air - Romantic Collection <br />

              </p>
              <p>
                {videoFullInfo ? videoFullInfo.decription : ""}   ...more</p>
            </div>
            <div className="comment_N">
              <p>{videoFullInfo ? videoFullInfo.Ncomments : ""} Comments</p>
              <div className="sort">
                <img className='invert' src={assets.sort} alt="" />
                <p>Sort by</p>
              </div>
            </div>
            <div className="comment_box">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  author={comment.author}
                  text={comment.text}
                  likeCount={comment.likeCount}
                  publishedAt={comment.publishedAt}
                  authorProfileImage={comment.authorProfileImage}

                />
              ))}

            </div>
          </div>
          <div className="video_part2">

            {
              videoData.map((video, index) => {
                return <Link to={`/video/song/${video.id}`}><Zaib key={index} video={video} /></Link>
              })
            }


          </div>
        </div>
      </div>
    </div>
  )
}
