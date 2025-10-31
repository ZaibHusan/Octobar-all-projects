import React from 'react'
import './Comment.css'
import assets from '../../assets'
import getTimeAgo from '../Videocard/function'
import get from './get'

export default function Comment({ author, text, likeCount, publishedAt, authorProfileImage }) {
    return (
        <div className="Comment">
            <div className="comment_profile">
                <img src={authorProfileImage?authorProfileImage:assets.profile} alt="" />

                <div className="comment_text">
                    <div className="comment_channel"><h3>{author}</h3> <span>({get(publishedAt)} month ago)</span></div>
                    <div className="comment_content">{text.slice(0, 100)} </div>
                    <div className="comment_emojies">
                        <div className="emojies_box">
                            <img className='invert' src={assets.like} alt="" />
                            <p>{likeCount}</p>
                        </div>
                        <div className="comment_reply">
                            <p>Reply</p>
                        </div>
                    </div>
                    <div className="connent_reply_box">
                        <img className='downArrow invert' src={assets.downArrow} alt="" />
                        <p>15 Replies</p>
                    </div>
                </div>
            </div>
            <div className="comment_other">
                <img className='invert' src={assets.other} alt="" />
            </div>
        </div>
    )
}
