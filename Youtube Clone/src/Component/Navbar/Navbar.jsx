

import React from 'react'
import './Navbar.css'
import assets from '../../assets'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
function Navbar() {

  return (
    <div className='navbar'>
      <div className="navbar_left">
        <div className="logo">
          <div className="logo_hover">
            <img className='invert' src={assets.hamburger} alt="hamburger" />
          </div>
          <Link to={"/"}><div className="youtube">
            <img src={assets.logo} alt="logo" />
            <span>Youtub</span>
            <p>pk</p>
          </div></Link>
        </div>
      </div>
      <div className="navbar_middle">
        <div className="input">
          <input type="text" placeholder="Search" />
          <img className='invert' src={assets.search} alt="search" />
        </div>
        <div className="voice">
          <img className='invert' src={assets.mic} alt="mic" />
        </div>
      </div>
      <div className="navbar_right">
        <div className="nabar_right_box invert"> <img src={assets.upload} alt="upload" /></div>
        <div className="nabar_right_box invert"> <img src={assets.notification} alt="notification" /></div>
        <div className="nabar_right_box profile">
          <img src={assets.profile} alt="profile" />
        </div>
      </div>

    </div>
  )
}

export default Navbar