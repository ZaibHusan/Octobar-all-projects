import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Section from './components/Section/Section'
import Offer from './components/Offer/Offer'
import About from './components/About/About'
import Student from './components/Student/Student'
import Testimonals from './components/Testimonals/Testimonals'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
export default function App() {
  const [Number, setNumber] = useState(0)
  useEffect(() => {

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      setNumber(scrollTop)
    })

  }, [])

  return (
    <div className="App">
      <Navbar Number={Number} />
      <Banner />
      <Section title={"Our PROGRAM"} program={"What We Offer"} />
      <Offer />
      <About />
      <Section title={"Gallery"} program={"Campus Photos"} />
      <Student />
      <Section title={"TESTIMONIALS"} program={"what Student Says"} />
      <Testimonals />
      <Section title={"Contact Us"} program={"Get in Touch"} />
      <Contact />
      <Footer />
    </div>
  )
}
