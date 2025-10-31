import React, { useEffect } from 'react'
import './Vidoecard.css'
import assets from '../../assets'
import API from '../../api'
import getTimeAgo from './function'
import calculateTime from './Function2'

function Vidoecard({ thumbinal, title, channel_name, channel_id, time, views }) {

  return (
    <div className="vc_card">
      <div className="vc_banner">
        <img src={thumbinal} alt="" />
      </div>
      <div className="vc_box">
        <div className="vc_details">
          <div className="vc_title">
            <p>{title} </p>
          </div>
          <div className="vc_channel_name">{channel_name}</div>
          <div className="vc_time">{`${calculateTime(views)} views . ${getTimeAgo(time)}`}</div>
        </div>
      </div>
    </div>
  )
}

export default Vidoecard
