import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        trailerVideo: null,

    },
    reducers:{
        addNowPlayingMovies: (state , action)=>{
            state.addNowPlayingMovies= action.payload;
        },
        addPopularMovies: (state , action)=>{
            state.popularMovies= action.payload;
        },
        addUpcomingMovies: (state , action)=>{
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state , action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo: (state , action)=>{
            state.trailerVideo= action.payload;
        }

    },
});

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addUpcomingMovies , addTopRatedMovies }= moviesSlice.actions;

export default moviesSlice.reducer;
