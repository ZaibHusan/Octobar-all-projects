import React, { use, useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import API from '../api'
import getTimeAgo from '../Component/Videocard/function'
import calculateViews from '../Component/Videocard/Function2'
import getVideoComments from './context1'







export const dataContext = createContext(50)
export default function Context({ children }) {

    const [Id, setId] = useState("")
    const [videoFullInfo, setvideoFullInfo] = useState(null)
    const [comments, setcomments] = useState([])
    const [catagerys, setcatagerys] = useState(0)
    const [videoData, setvideoData] = useState([]);
    const [API, setAPI] = useState(`AIzaSyC8F_304uSie_hBbQajTgjARjoK5L2phik`)





    const Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${catagerys}&maxResults=20&key=${API}`
    useEffect(() => {

        let fetchData = async () => {
            let response = await fetch(Url);
            let data = await response.json();
            setvideoData(data.items);
        }
        fetchData();

    }, [catagerys])












    useEffect(() => {
        const fetchingdata = async () => {
            if (Id) {
                let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${Id}&key=${API}`)
                const data = await res.json()
                let comment = await getVideoComments(Id);
                setcomments(comment)
                let channel = await Funchannel(data.items[0].snippet.channelId)
                let subscriberCount = await getSubscriberCount(data.items[0].snippet.channelId)
                const FUlldata = {
                    decription: data.items[0].snippet.description.slice(0, 100),
                    Title: data.items[0].snippet.title,
                    Channel_name: data.items[0].snippet.channelTitle,
                    Like: calculateViews(data.items[0].statistics.likeCount),
                    View: getSubscriberCount(parseInt(data.items[0].statistics.viewCount)),
                    Ncomments: data.items[0].statistics.commentCount,
                    ChannelProfile: channel.items[0].snippet.thumbnails.medium.url,
                    UploadingTime: getTimeAgo(data.items[0].snippet.publishedAt),
                    comments: comment,
                    subscriberCount: calculateViews(subscriberCount),
                    number_shares: data.items[0].statistics.shareCount,

                }
                /*why the data is not storing here */
                videosaving(FUlldata)
            }

        }
        fetchingdata()

    }, [Id])




    const videosaving = (videoinfo) => {
        setvideoFullInfo(videoinfo)
    }



    const getSubscriberCount = async (channelId) => {
        const channelRes = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API}`);
        const channelData = await channelRes.json();

        if (channelData.items && channelData.items.length > 0) {
            return channelData.items[0].statistics.subscriberCount;
        } else {
            return "N/A";
        }
    }
    let Funchannel = async (channel_id) => {
        const channelRes = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channel_id}&key=${API}`);
        const channelData = await channelRes.json();
        return channelData

    }
    return (
        <dataContext.Provider value={{ setId, Id, videoFullInfo, comments, videoData }}>{children}</dataContext.Provider>
    )
}


