import React from "react";
import Login from "./Component/Login";
import Browse from "./Component/Browse";
import {RouterProvider} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const Body = ()=> {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/Browse",
      element: <Browse/>
    }
  ])
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body;
