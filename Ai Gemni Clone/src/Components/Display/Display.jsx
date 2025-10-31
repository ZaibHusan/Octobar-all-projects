import React, { useRef } from 'react'
import "./Display.css"
import Data from '../../asset'
import { useState } from 'react'
import { useContext } from 'react'
import { contexts } from '../../context/zaib'

export default function Display() {
  const [main, setmain] = useState(true)
  const { Input, setInput, Reply } = useContext(contexts);
  const [Output, setOutput] = useState("")
  

  const OutRef = useRef(null);
  const [storage, setstorage] = useState([
    {
      inputValue: "this is the input value",
      outputValue: " this is oupt put"
    }
  ]);

  const Fun = (I, O) => {
    return (
      {
        inputValue: I,
        outputValue: O
      }
    )
  }



  const mom = (item) => {
    if (OutRef.current) {
      OutRef.current.innerText = item.inputValue;
    }
    setOutput(item.outputValue);
    setmain(false);
    setInput('')
  };


  const Handle = (e) => {

    setInput(e.target.value)
  }

  const click = async () => {
    setOutput("");
    setmain(false)
    let reply = await Reply(Input);
    OutRef.current.innerText = Input;
    console.log(reply)
    setOutput(reply);
    // Add new object to storage safely
    let co = Fun(Input, reply);
    setstorage([...storage, co]); // 
    console.log(storage)
       setInput('')

  }



  return (
    <div className="Display">
      <div className="left">
        <div className="part1">
          <div className="nav">
            <div className="cricle"><img src={Data.manu} alt="" /></div>
            <div className="cricle"><img src={Data.search} alt="" /></div>
          </div>
          <div className="chat">
            <img src={Data.Chat} alt="" />
            <p>New chat</p></div>
        </div>
        <div className="part2">
          <p>Recent</p>
          <div className="list">
            {storage.map((object, index) => (
              <div
                key={index}
                className="previous"
                onClick={() => mom(object)} // pass the clicked object
              >
                <p>{object.inputValue}</p>
              </div>
            ))}

          </div>
        </div>
        <div className="part3">
          <div className="setting">
            <img src={Data.settings} alt="" />
            <p>settings & help</p>
          </div>
        </div>

      </div>
      <div className="right">
        <div className="Right_1">
          <h3>Gemini</h3>
          <div className="folder">
            <img src={Data.folder} alt="" />
            <div className="profile">
              <img src={Data.profile} alt="" />
            </div>
          </div>
        </div>
        <div className="Right_2">
          {
            main ? <div className="Right_2_box"> <div className="gradient-text"><h1 className='hello'>Hello, Adil</h1></div> </div> : <div className="output">

              <div className="outer">
                <div className="user">
                  <div className="p"> <p ref={OutRef} ></p></div>
                </div>
                <div className="main_box">

                  <div className="gemini_logo">
                    <img src={Data.gemini} alt="" />
                  </div>
                  <div className="text">
                    <p>{Output}</p>
                    <div className="bottom">
                      <img src={Data.icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          }
        </div>
        <div className="Right_3">
          <div className="Right_2_1">
            <input placeholder='Ask Gemini' onChange={Handle} onKeyDown={(e) => {
              if (e.key === "Enter") {
                click();
              }
            }} value={Input} type="text" />
          </div>
          <div className="Right_2_2">
            <div className="B1">
              <div className="add">
                <img src={Data.add} alt="" />
              </div>
              <div className="tool">
                <img src={Data.tool} alt="" />
                <p>Tools</p>
              </div>
            </div>
            <div className="B2">
              <div className="down">
                <p>2.5 Flash</p>
                <img src={Data.down} alt="" />
              </div>
              <div className="phone">

                <img src={Data.phone} alt="" />
              </div>
              <div onClick={() => { click() }} onChange={(e) => { if (e.target.value === "Enter") { click() } }} className="send">
                <img src={Data.send} alt="" />
              </div>
            </div>
          </div>
        </div>
        <p>Gemini can make mistakes, so double-check it</p>
      </div>
    </div>
  )
}
