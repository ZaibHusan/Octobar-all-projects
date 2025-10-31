import React from 'react'
import "./Section.css"
function Section({title,program}) {
    return (
        <div className="Section">
            <p>{title}</p>
            <h1>{program}</h1>
        </div>
    )
}

export default Section