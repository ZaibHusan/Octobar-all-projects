import React from 'react'
import "./Backgound.css"
import Data from '../../Assets'
export default function Backgound({ vid, Image }) {
    if (vid) {
        return <div className="backgound  intensity"><video style={{
            objectPosition:"0px -200px "
        }} src={Data.video} muted autoPlay loop controls></video></div>
    }
    if (Image == 0) {
        return <div className="backgound intensity"><img src={Data.video1} alt="" /></div>
    } 
    if (Image == 1) {
        return <div className="backgound intensity"><img src={Data.video2} alt="" /></div>
    } 
    if (Image == 2) {
        return <div className="backgound intensity"><img src={Data.video3} alt="" /></div>
    } 
}
