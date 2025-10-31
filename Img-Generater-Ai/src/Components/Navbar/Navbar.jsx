import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { NavLink , Link} from 'react-router-dom'

export const Navbar = () => {
    const [UB, setUB] = useState("Home")
    return (
        <div className="navbar">
           <Link to={'/'}><div className="logo">Img-Generater-AI</div></Link>
            <ul>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/Ai'}>Ai</NavLink>
                <NavLink to={'/About'}>About</NavLink>
            </ul>
           <Link to={'/Ai'}> <button>Get Started</button></Link>
        </div>
    )
}
