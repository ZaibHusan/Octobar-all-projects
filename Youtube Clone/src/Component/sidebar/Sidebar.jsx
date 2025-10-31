import React from 'react'
import './Sidebar.css'
import assets from '../../assets'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_part">
                <div className="sidebar_part1">
                    <div className="sidebar_box">
                        <img src={assets.home} alt="home" />
                        <p>Home</p>
                    </div>
                    <div className="sidebar_box">
                        <img src={assets.schort} alt="home" />
                        <p>Shorts</p>
                    </div>
                    <div className="sidebar_box">
                        <img src={assets.subscribe} alt="home" />
                        <p>Subscribe</p>
                    </div>
                </div>
                <hr />
                <div className="sidebar_part2">
                    <div className="sidebar_box you">
                        <p>You</p>
                        <img src={assets.left} alt="home" />
                    </div>

                    <div className="sidebar_box">
                        <img src={assets.history} alt="home" />
                        <p>History</p>
                    </div>
                    <div className="sidebar_box">
                        <img src={assets.playlist} alt="home" />
                        <p>Playlist</p>
                    </div>
                    <div className="sidebar_box">
                        <img src={assets.youtube} alt="home" />
                        <p>Your videos</p>
                    </div>
                    <div className="sidebar_box">
                        <img src={assets.learning} alt="home" />
                        <p>Your courses</p>
                    </div>
                    <div className="sidebar_box">
                        <img src={assets.watchL} alt="home" />
                        <p>Watch Later</p>
                    </div>
                    <div className="sidebar_box">
                        <img src={assets.like} alt="home" />
                        <p>Liked videos</p>
                    </div>
                </div>
                <hr />
                <div className="sidebar_part3">

                       <div className="sidebar_box">
                        <img src={assets.man1} alt="home" />
                        <p>Mr khan</p>
                    </div>
                       <div className="sidebar_box">
                        <img src={assets.man2} alt="home" />
                        <p>goro G</p>
                    </div>
                       <div className="sidebar_box">
                        <img src={assets.man3} alt="home" />
                        <p>mamo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
