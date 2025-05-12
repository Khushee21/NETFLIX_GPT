import React, { useRef, useState } from "react";
import "./GPT.css";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import openAi from "./OpenAi"; 

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const [gptResults, setGptResults] = useState("");  // ✅ Store GPT results in state

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" + searchText.current.value + ". Only give me the names of five movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Villain, Koi Mil Gaya";

        try {
            const response = await openAi.chat.completions.create({
                messages: [{ role: "user", content: gptQuery }],
                model: "gpt-3.5-turbo",
            });

            console.log(response.choices);
            setGptResults(response.choices[0]?.message?.content || "No results found");  // ✅ Store response in state

        } catch (error) {
            console.error("Error fetching GPT results:", error);
            setGptResults("Failed to fetch recommendations.");
        }
    };

    return (
        <div className="search-bar-container">
            <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    className="input-box"
                    type="text"
                    placeholder={lang[langKey].getSearchPlaceholder}
                />
                <button className="search-box" onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>

            {/* Display GPT results */}
            {gptResults && (
                <div className="gpt-results">
                    <h3>Recommended Movies:</h3>
                    <p>{gptResults}</p>
                </div>
            )}
        </div>
    );
};

export default GptSearchBar;
