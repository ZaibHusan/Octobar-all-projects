import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Video from './Pages/Video/Video'
function App() {
  const [catagery, setcatagery] = useState(0);
  return (
    <>
    <Navbar />
    <Routes >
      <Route path='/' element={<Home catagery={catagery} setcatagery={setcatagery} /> } />
      <Route  path='/video/:catagery/:id' element={<Video/>} />
      <Route  path='/video/:catagery/:id' element={<Video/>} />
      
    </Routes>
    </>
  )
}


export default App