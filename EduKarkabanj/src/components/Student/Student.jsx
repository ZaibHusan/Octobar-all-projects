import React from 'react'
import Data from '../../assets'
import "./Student.css"
export default function Student() {
    return (
        <div className="Student">

            <div className="Student_boxs">
                <div className="Student_box">
                    <img src={Data.Campus1} alt="" />
                </div>
                <div className="Student_box">
                    <img src={Data.Campus2} alt="" />
                </div>
                <div className="Student_box">
                    <img src={Data.Campus3} alt="" />
                </div>
                <div className="Student_box">
                    <img src={Data.Campus4} alt="" />
                </div>
            </div>

          <div className="see_more">
            <button>See more here <img src={Data.arrow} alt="" /></button>
          </div>

        </div>
    )
}
