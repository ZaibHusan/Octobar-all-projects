import React from 'react'
import "./navbar.css"
export default function navbar() {
  return (
    <div className="Navbar">
        <h2>Carsho<span className='span'>room</span></h2>
        <ul className="nav">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li className='buy'>Buy Now</li>
        </ul>
    </div>
  )
}
