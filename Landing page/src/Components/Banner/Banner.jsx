import React from 'react'
import "./Banner.css"
import Data from '../../Assets'
export default function Banner({Image ,vid,setImage, setvid,text}) {
    console.log(Image)
    
    return (
        <>
            <div className="Banner">
                <h1 className='title'></h1>
                <p className='p'>{text.title} At ${text.price}.</p>
                <button className='buys'>Buy Now</button>
            </div>

            <div className="videos">
                <ul className="dots">
                    <li className={Image === 0 && "Red"} onClick={() => {setImage(0)
                    }}></li>
                    <li  className={Image === 1 && "Red"}  onClick={() => {setImage(1)}}></li>
                    <li className={Image === 2 && "Red"} onClick={() => {setImage(2)}}></li>
                </ul>
                <div className="video">
                    <img src={vid?Data.pause:Data.play} onClick={() => {
                        setvid(!vid)
                    }} alt="" />
                </div>
            </div>
        </>
    )
}
