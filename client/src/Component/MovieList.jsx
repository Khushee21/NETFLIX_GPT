import React from "react";
import MovieCard from "./MovieCard";
import "./MovieCard.css";

const MovieList =({ title , movies }) =>{

    //console.log(movies);

    return (
        <div className="movie-list-container">
            <h1 className="movie-title">{title}</h1>
            <div >
                <div className="movie-cards">
                    {movies?.length > 0 ? (
                        movies.map(movie => 
                        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                         )
                        ) : (
                     <p>No movies found</p>
                    )}
                </div> 
            </div>     
        </div>
    )
}

export default MovieList;