import React, { useState } from 'react'
import './Form.css'
export default function Form() {
    const [State, setState] = useState("Sign In")
    return (
        <div className='Form'>
            <div className="container">
                <h1>{State}</h1>
                <div className="Inputs">
                {
                    State === "Log In" &&  <div className="input">
                        <input type="text" id="username" placeholder='Username' />
                    </div>
                }
                    <div className="input">
                        <input type="email" id="email" placeholder='Email' />
                    </div>
                    <div className="input">
                        <input type="password" id="password" placeholder='Password' />
                    </div>
                </div>
                {
                State === "Sign In" && <div className="forgot">
                    <p>Forgot Password?<span>Click Here</span></p>
                </div>
                }
                <div className="Button">
                   <button className={State === "Sign In" ? "gray" : ""} onClick={()=>{setState("Sign In")}}>Sign In</button>
      <button className={State === "Log In" ? "gray" : ""} onClick={()=>{setState("Log In")}}>Log In</button>

                </div>
            </div>
        </div>
    )
}

