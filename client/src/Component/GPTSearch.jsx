import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import "./GPT.css";
import { BG } from "./constant";

const GPTSearch=()=>{
    return(
        <div className="gpt-search-bg">
            <div className="gpt-search-bg">
                <img
                    src={BG}
                    alt="Background"
                    className="login-background"
                />
            </div>
            <div className="gpt-search-container">
                <GptSearchBar/>
                 <GptMovieSuggestions/>
            </div>
           
        </div>
    );
};

export default GPTSearch;