import { useState } from "react";

function VideoCard({title, channel, views }){
    return(
        <div className="video-card">
            <h2>{title}</h2>
            <p>Channel: {channel}</p>
            <p>Views: {views}</p>
        </div>
    )
}

export default VideoCard;