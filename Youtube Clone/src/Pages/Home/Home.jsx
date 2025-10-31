import React from 'react'
import './Home.css'
import { useState } from 'react'
import Sidebar from '../../Component/sidebar/Sidebar'
import Main from '../../Component/Main/Main'
import API from '../../api'
import { useEffect } from 'react'
import { data } from 'react-router-dom'
import { useContext } from 'react'
import { dataContext } from '../../context/Context'
export default function Home({ catagery, setcatagery }) {
 




  const [videoData, setvideoData] = useState([]);
  const Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${catagery}&maxResults=200&key=${API}`
  useEffect(() => {
    
    let fetchData = async () => {
      let response = await fetch(Url);
      let data = await response.json();
      setvideoData(data.items);
    }
    fetchData();

  }, [catagery])




  return (
    <div className="Home">
      <Sidebar />
      <Main catagery={catagery} setcatagery={setcatagery} videoData={videoData} />
    </div>
  )
}
