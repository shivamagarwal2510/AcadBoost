import React from "react";
import { Link } from "react-router-dom";
const Card2= ({playlistItem, currentVideo, currentVideoId, setCurrentVideoId, setCurrentVideo})=>{

    const handleCurrentVideo =(event)=>{
        console.log(playlistItem);
        setCurrentVideo(playlistItem);
        setCurrentVideoId({currentVideoId:playlistItem.snippet.resourceId.videoId,index:playlistItem.snippet.position})
    }
    return(
        <>
        <button onClick={handleCurrentVideo} >
            <div className="card border-2 rounded shadow-xl w-56 m-2 h-[250px] hover:shadow-slate-50 relative" >
                <img src = {`${playlistItem.snippet.thumbnails.medium.url}`} alt="image"  />
                <p className="p-3">{`${playlistItem.snippet.title}`}</p>
            </div>
       </button>
        </>
    )
}

export default Card2;