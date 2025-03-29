import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../Component/constant";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    useEffect(() => {
        const getMovieVideo = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
                    API_OPTIONS
                );
                const json = await response.json();

                //console.log("API Response:", json);

                // Find the first trailer of type "Trailer" and site "YouTube"
                const trailer = json.results.find(video => video.type === "Trailer" && video.site === "YouTube");

                if (trailer) {
                   // console.log("Selected Trailer:", trailer);
                    dispatch(addTrailerVideo(trailer)); 
                } else {
                    console.warn("No trailer found for this movie.");
                }
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        };

        if (movieId) getMovieVideo();
    }, [movieId, dispatch]); 

    return trailerVideo; 
};

export default useMovieTrailer;
