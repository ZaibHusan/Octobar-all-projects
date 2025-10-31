import React from 'react'
import "./Offer.css"
import Data from '../../assets'
export default function Offer() {
    return (
        <div className="Offer">
            <div className="boxs">
                <div className="box">
                    <img className='boximg' src={Data.Student1} alt="" />
                    <div className="over1">
                        <img  src={Data.Edu1} alt="" />
                        <p>Graducation dagree</p>
                    </div>
                </div>
                <div className="box">
                    <img className='boximg' src={Data.Student2} alt="" />
                    <div className="over1">
                        <img  src={Data.Edu2} alt="" />
                        <p>Master Dagree</p>
                    </div>
                </div>
                <div className="box">
                    <img className='boximg' src={Data.Student3} alt="" />
                    <div className="over1">
                        <img  src={Data.Edu3} alt="" />
                        <p>Post graduction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
