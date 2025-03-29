import React from "react";
import MovieList from "./MovieList";
import {useSelector} from "react-redux"
import "./MovieCard.css";

const SecondaryContainer =() =>{

    const movies= useSelector(store => store.movies);

   return(
    <div className="secondary-container">
        {/* SecondaryContainer
        lot of movie list-n
        movie list popuar
        movie list now_playing
        movie list Hrror  */}
        <div style={{ marginTop: "-15%" , backgroundColor: "black", }}>
        <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
        <MovieList title={"Top-Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
        <MovieList title={"More to Explore"} movies={movies.addNowPlayingMovies}/>
        </div>
    </div>
   );
};

export default SecondaryContainer;