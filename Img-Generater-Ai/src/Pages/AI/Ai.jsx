import React from 'react'
import "./Ai.css"
import img from "./download.jpg"
import { useState } from 'react';
export default function Ai() {
const [loading, setloading] = useState(false)
const [prompt, setprompt] = useState("A fantasy landscape, trending on artstation");
const [Url, setUrl] = useState("");
  const generatePath = async () => {
        setloading(true)
    await Api_call();
        setloading(false)

  };

  const Handlechange = (e)=>{

    setprompt(e.target.value);
  }
  const Api_call = async () => {
    const API_KEY = "TVZhJ2GXRIfP6jIVohCej48t15FpET304vebHjWZvD9AlcuK8GxGMXQY";
    let res = await fetch(`https://api.pexels.com/v1/search?query=${prompt}&per_page=1`, {
      headers: {
        Authorization: API_KEY
      }
    })
    let parsedData = await res.json();
  setUrl(parsedData.photos[0].src.original);

  };
 




  return (
    <div className='Ai'>
      <div className="h1"> <h1>Convert Image to Text</h1></div>
      <div className="boxs">
        <div className="boxs1">
          <h2>Describe your prompt in the box below:</h2>
          <textarea onKeyDown={(e) => {
            if (e.key === 'Enter') { generatePath() }
          }} onClick={async(e)=>{ generatePath() }} name="" id="" cols="30" rows="10" onChange={Handlechange} placeholder='A fantasy landscape, trending on artstation'></textarea>
          <button >Generate</button>
        </div>
        <div className="boxs2">
          <h2>Generated Image:</h2>
          <div className="generated-img">
            {loading?<p>Loading...</p>:<img src={Url ? Url : img} alt="" />}
            

          </div>
          <div className="download">
            {Url && (
                <button onClick={() => {
                  const link = document.createElement('a');
                  link.href = Url;
                  link.download = 'image.jpg';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}>Download</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
