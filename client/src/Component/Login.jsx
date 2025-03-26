import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import "./LoginStyles.css";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const msg = checkValidData(
      name.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(msg);
     
    if(msg) return;
      //sign in sign up
      if(!isSignInForm) {
        //Sign 
        createUserWithEmailAndPassword(
          auth ,
          email.current.value, 
          password.current.value
        )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,{
            displayName: name.current.value
          })
          .then(()=>{
            const { uid , email , displayName }= auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email:email,
                displayName:displayName,
              })
            );
            // navigate("/browse")
            // console.log("done")
          }).catch((error)=>{
            setErrorMessage(errorMessage);
          })
          //  console.log(user)
        })
        .catch((error) => {
          const errorCode=error.code;
          const errorMessage= error.message;
          setErrorMessage(errorCode +"-"+errorMessage);
          // navigate("/");
        })
      }
      else
      {
          //Sign in
          signInWithEmailAndPassword(auth ,
            email.current.value, 
            password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            //  console.log(user);
            // navigate("/browse");
          })
          .catch((error)=>{
            const errorCode=error.code;
            const errorMessage= error.message;
            setErrorMessage(errorCode +"-"+errorMessage);
            // navigate("/");
          })
      }
    
  };

  return (
    <div className="login-container">
      <Header />

      {/* Background Image */}
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="Background"
          className="login-background"
        />
      </div>

      {/* Login Form */}
      <form onSubmit={(e) => e.preventDefault()} className="login-form">
        <h1 className="login-title">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="input-field"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="input-field"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="input-field"
        />
        <p className="error-message">{errorMessage}</p>
        <button className="login-button" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="toggle-text" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now!"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
