import React from 'react'
import "./About.css"
export default function about() {
  return (
    <div className="about">
      <div className="Title">
        <h1>About <span className='red'>Us</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <hr />
      <div className="Mation">
        <h2>Mation</h2>
        <p>Our mation is to provid a good and Free ai tools to all humanity beacuse Every one deserive to have a good AI toos and start work on that</p>
      </div>
       
      <div className="Quick-question">
        <div className="question1">
          <p>Is this AI tool a free tool?</p>
          <div className="answer">Yes, this AI tool is 100% free.</div>
        </div>

        <div className="question1">
          <p>Do I need to create an account to use it?</p>
          <div className="answer">No, you can use it without creating an account.</div>
        </div>

        <div className="question1">
          <p>Can I use this tool on my mobile phone?</p>
          <div className="answer">Yes, it works smoothly on both mobile and desktop.</div>
        </div>

        <div className="question1">
          <p>Does this tool support multiple languages?</p>
          <div className="answer">Yes, it supports multiple languages.</div>
        </div>

        <div className="question1">
          <p>Will my data be safe while using this tool?</p>
          <div className="answer">Yes, your data is completely secure and private.</div>
        </div>
      </div>
    </div>
  )
}
