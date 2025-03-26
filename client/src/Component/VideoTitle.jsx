import React from "react";
import "./VideoTitle.css";

const VideoTitle=({title , overview})=>{
    return(
        <div className="Video-title-container">
            <h1 className="Video-title">{title}</h1>
            <p className="Video-des">{overview}</p>
            <div className="Buttons">
                <button className="Play-btn"> ▶Play</button>
                <button className="more-info-btn">More info</button>
            </div>
        </div>
    )
};

export default VideoTitle;