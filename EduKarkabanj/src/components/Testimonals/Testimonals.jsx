import React, { useRef } from 'react'
import "./Testimonals.css"
import Tbox from './Tbox/Tbox'
import Data from '../../assets'
export default function Testimonals() {

    const people = [
        {
            name: "Emily Williams",
            Dname: "Edusity, USA",
            decription: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.",
            Url: "Campus1"
        },
        {
            name: "John Carter",
            Dname: "Harvard, USA",
            decription: "Great environment, helpful teachers, and amazing campus life!",
            Url: "Campus2"
        },
        {
            name: "Sana Malik",
            Dname: "Oxford, UK",
            decription: "The experience has been truly transformative and enriching.",
            Url: "Campus3"
        }
    ];

    const boxRef = useRef(null)
    const Left = (e) => {
        boxRef.current.scrollBy({ left: -510, behavior: 'smooth' });
    }
    const Right = (e) => {
        boxRef.current.scrollBy({ left: 510, behavior: 'smooth' });
    }
    return (
        <div className="Testimonals">
            <div className="btn_left" onClick={Left}><img src={Data.Back} alt="" /></div>
            <div className="Tboxs" ref={boxRef}>
                {/* { name, Dname, decription, Url */}
                {
                    people.map((Item, index) => {
                        return (
                            <Tbox name={Item.name}
                                key={index}
                                Dname={Item.Dname}
                                decription={Item.decription}
                                Url={index + 1}
                            />
                        )
                    })
                }

            </div>
            <div className="btn_left" onClick={Right}><img src={Data.Next} alt="" /></div>
        </div>
    )
}
