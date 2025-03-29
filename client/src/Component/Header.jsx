import React, { useEffect } from "react";
import "./Header.css";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, userAvtar } from "./constant";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error-page");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) =>{
    //console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="header-container">
      <img src="/Logo.png" alt="Logo" className="header-logo" />
      {user && (
      <div className="user-container">

       { showGptSearch && <select className="drop-down-lang" 
            onChange={handleLanguageChange}>

        {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
        ))}
        </select>}
       <button className="gpt-search" onClick={handleGptSearchClick}>
        {showGptSearch? "Homepage" : "GPT Search"}
        </button>
       <div className="user-icon">
        <img src={userAvtar} alt="user-icon" />
        </div>
        <button className="logout-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    )}
    </div>
  );
};

export default Header;
