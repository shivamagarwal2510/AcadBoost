    import React from "react";
    import Card from "../Card/Card.component";
    
    const CardList = ({playlists})=>{
        
        return(
            <>
            
            <div className="cardList flex flex-col flex-wrap ">
            {
            (playlists[0]!==undefined)?(

            <strong className="mt-12 ml-10 text-2xl">Courses by {playlists[0].snippet.channelTitle}</strong>):(
                <h1>Loading...</h1>
            )
            }
                <div className="cards flex flex-wrap m-auto w-[95vw]">
                {
                    playlists.map(playlist=>{
                        
                        return(
                            <Card playlist={playlist}/>
                        )
                    })
                }
                </div>
            </div>
            </>
        )
    }
    
    export default CardList;