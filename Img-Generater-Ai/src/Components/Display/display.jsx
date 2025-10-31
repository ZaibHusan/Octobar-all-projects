import React from 'react'
import './display.css'
import Process from './Process/process'
import { Link } from 'react-router-dom'
import Video from '../video/video'
export default function Display() {
  return (
 <>
    <div className="display">
        <h1>Welcome <span className='span'>to Img-Generater-AI</span></h1>
        <p>Your one-stop solution for generating stunning images using AI.</p>
        <Link to={'/Ai'}><button>Get Started</button></Link>

    </div>
<hr />
  <Process />
  <Video />
 </>
  )
}
