import React from 'react'
import "./Navbar.css"
import Data from '../../assets'
import { Link } from 'react-scroll'
function Navbar({Number}) {
  console.log(Number)
  return (
    <div className={`Navbar ${Number>80&&"Back"}`}>
      <h1 className="logo">
        <span className="edu">Edu</span><span className="karkabanj">karkabanj</span>
      </h1>

      <ul>
        {/* Home Program About usCampus Testimonials Contact us */}
        <li><Link to='Banner'  smooth={true} duration={1000}  delay={1000}>Home</Link></li>
        <li><Link to='Testimonals'  smooth={true} duration={1000}  delay={1000}>Program</Link></li>
        <li><Link to='About'  smooth={true} duration={1000}  delay={1000}>About us</Link></li>
        <li><Link to='Student'  smooth={true} duration={1000}  delay={1000}>Campus</Link></li>
        <li><Link to='Offer'  smooth={true} duration={1000}  delay={1000}>Testimonials</Link></li>
        <li className='btn'><Link to='Footer'  smooth={true} duration={1000}  delay={1000}>Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar