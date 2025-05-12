export const  userAvtar="https://i.pinimg.com/474x/ff/a6/42/ffa6421da8b8b6b345f26bc1f8a90139.jpg";

export const BG ="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg";


export const API_KEY = '9c0a2d49b48711a8c365f8bb8648a9fd';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY, 
  }
};

export const OPENAI_KEY = import.meta.env.VITE_OPENAPI_KEY; 


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400/";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en" , name: "English"} , 
  {identifier: "hindi" , name: "Hindi"} , 
  {identifier: "spanish" , name: "Spanish"} 
];


// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY ;
