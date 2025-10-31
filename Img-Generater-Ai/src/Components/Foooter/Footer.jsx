import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='Footer'>
      <p>All Right resverve Mr zaib for creating this AI tools</p>
       <ul>
                <Link to={'/'}><li className='style'>Home</li></Link>
                <Link to={'/Ai'}><li className='style'>Ai</li></Link>
                <Link to={'/about'}><li className='style'>About</li></Link>
            </ul>
    </div>
  )
}
