import React from "react";
import "./GPT.css";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar =() =>{

    const langKey= useSelector(store => store.config.lang)

    return(
        <div className="search-bar-container">
            <form className="search-bar"action="">
                <input className="input-box" type="text"  placeholder={lang[langKey].getSearchPlaceholder} />
                <button className="search-box">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;