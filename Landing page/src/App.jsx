import React, { useEffect } from 'react'
import Backgound from './Components/Backgound/Backgound'
import Navbar from './Components/Navbar/navbar';
import { useState } from 'react';
import Banner from './Components/Banner/Banner';
export default function App() {

  const cars = [
    {
      title: "Luxury Sedan",
      price: 35000,
      name: "Toyota Camry"
    },
    {
      title: "Electric SUV",
      price: 55000,
      name: "Tesla Model Y"
    },
    {
      title: "Sport Coupe",
      price: 72000,
      name: "BMW M4"
    }
  ];


  const [Image, setImage] = useState(0)
  const [vid, setvid] = useState(false)
  const [text, settext] = useState(cars)

useEffect(() => {
  const interval = setInterval(() => {
    setImage((prev) => {
      if (prev < 2) {
        return prev + 1;   // keep increasing
      } else {
        return 0;          // reset back to 0
      }
    });
  }, 5000);

  return () => clearInterval(interval); // cleanup on unmount
},);

  
  return (
    <>
      <Backgound vid={vid} Image={Image} />
      <Navbar />
      <Banner vid={vid} Image={Image} setvid={setvid} setImage={setImage} text={text[Image]} />
    </>
  )
}
