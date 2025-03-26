import React, { useState } from "react";
import "./Header.css"; 
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser , removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { userAvtar } from "./constant";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Get user from Redux

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
    const unsubsribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({ 
            uid: uid, 
            email : email, 
            displayName : displayName, 
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return() => unsubsribe();
    
  }, [dispatch, navigate]);

  return (
    <div className="header-container">
      <img src="/Logo.png" alt="Logo" className="header-logo" />
      {user && ( // Only show when user is logged in
        <div className="user-container">
          <div className="user-icon">
            <img
              src={userAvtar}
              alt="user-icon"
            />
          </div>
          <button className="logout-btn" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
