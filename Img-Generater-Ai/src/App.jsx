import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import './App.css'
import Display from './Components/Display/display'
import About from './Pages/About/About'
import Ai from './Pages/AI/Ai'
import { Route,Routes } from 'react-router-dom'
import Footer from './Components/Foooter/Footer'
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr className='divider'/>
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='AI' element={<Ai/>}/>
      </Routes>

   <hr />
      <Footer/>
    </div>
  )
}
