import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-0 z-50"> 
      <img 
        src="/Logo.png" 
        alt="Logo" 
        className="w-36 px-8 py-2 bg-gradient-to-b from-black " 
      />
    </div>
  );
};

export default Header;
