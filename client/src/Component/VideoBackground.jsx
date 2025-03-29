import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import "./VideoBackground.css";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useMovieTrailer(movieId); 

    if (!trailerVideo) {
        return <p>Loading trailer...</p>;
    }

    return (
       
            <div style={{ marginTop: "-7%" }}>
                <iframe
                    className="video"
                    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
     
        
    );
    
};

export default VideoBackground;
