import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [show, setShow] = useState(false)
  const [result, setResult] = useState('')

  const handleNumber1 = (e) => {
    setNumber1(e.target.value)
  }

  const handleNumber2 = (e) => {
    setNumber2(e.target.value)
  }

  const sum = () => {
    // Convert strings to numbers before adding
    const total = Number(number1) + Number(number2)
    setResult(total)
    setShow(true)
  }

  return (
    <>
      <div className="App">
        <h1>Calculator</h1>
        <div className="input">
          <label>Please enter first number</label>
          <input
            onChange={handleNumber1}
            type="number"
            placeholder="Enter first number"
          />

          <label>Please enter second number</label>
          <input
            onChange={handleNumber2}
            type="number"
            placeholder="Enter second number"
          />

          {show && <p>Result: {result}</p>}

          <button onClick={sum}>Sum</button>
        </div>
      </div>
    </>
  )
}
