import React from 'react'
import "./Card.css"
import Data from '../../../assets'
function Card() {
    return (
        <div className="Card">

            <h1>
                We Ensure better education for a better world
            </h1>
            <p>
                Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
            </p>
            <button className='btns'>Explore more <img className='arrow' src={Data.arrow} alt="" /></button>
        </div>
    )
}

export default Card