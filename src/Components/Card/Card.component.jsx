import React from "react";
import { CaretRightOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom"



const Card= ({playlist})=>{

    
    return(
        <>
       
            <div className="card border-2 rounded shadow-xl w-56 m-2 h-[250px] hover:shadow-slate-50 relative" >
                <img src = {`${playlist.snippet.thumbnails.medium.url}`} alt="image"  />
                <p className="p-3">{`${playlist.snippet.title}`}</p>
                
                <div className="mb-2 absolute bottom-2 left-4">
                <Link to="/video-player" state={{ 
                    playlistID:`${playlist.id}`}}><CaretRightOutlined/></Link>
                </div>
            </div>
       
        </>
    )
}

export default Card;