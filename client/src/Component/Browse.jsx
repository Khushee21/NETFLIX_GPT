

import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


 useNowPlayingMovies();
 usePopularMovie();
 useUpcomingMovies();
 useTopRatedMovies();

    return(
        <div>
        <Header/>
        {
          showGptSearch ? ( <GPTSearch/>) :
          (  <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )}

            
        </div>
    )
}

export default Browse;