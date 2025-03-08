import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm , setIsSignInForm ]=useState(true);
  const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="m-0 p-0 w-full h-screen relative overflow-hidden">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form */}
      <form className="relative z-10 bg-black bg-opacity-60 p-12 rounded-lg mx-auto w-1/3 mt-24 text-white">
        <h1 className="font-bold text-xl py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder="Full-Name" className="p-2 my-3 w-full rounded  bg-[rgba(22,22,22,1.0)]" />)}
        <input type="text" placeholder="Email Address" className="p-2 my-3 w-full rounded  bg-[rgba(22,22,22,1.0)]" />
        <input type="password" placeholder="Password" className="p-2 my-3 w-full rounded bg-[rgba(22,22,22,1.0)]" />
        <button className="p-3 my-4 bg-red-700 text-white w-full rounded">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-2  text-lx " onClick={toggleSignInForm}>New to Netflix ? Sign up Now?</p>
      </form>
    </div>
  );
};

export default Login;
