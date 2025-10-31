import React from 'react'
import "./Tbox.css"
import Data from '../../../assets'
export default function Tbox({ name, Dname, decription, Url }) {
    return (
        <div className="Tbox">
            <div className="profile">
                <div className="pro">
                    <img src={Data[`Campus${Url}`]} alt="" />



                </div>
                <div className="name">
                    <h2>{name}</h2>
                    <p>{Dname}</p>
                </div>
            </div>
            <div className="decription">
                <p>{decription}</p>
            </div>
        </div>
    )
}
