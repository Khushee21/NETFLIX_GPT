import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () =>{

    const movies= useSelector(store=> store.movies?.addNowPlayingMovies);
    if(movies===null)
    {
        return ;
    }
    const mainMovie= movies[0];
    // console.log(mainMovie);

    const {original_title , overview , id}=mainMovie;
    return(
        <div>
            {/* data come from store using useSelector*/}
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;
