import React from "react";
import { IMG_CDN_URL } from "./constant";
import "./MovieCard.css";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="movie-card-container">
      <img className="movie-card" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
