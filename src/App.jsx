import React from "react";
import PhotoGrid from "./components/PhotoGrid";
import About from "./components/About";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import PhotoView from "./components/PhotoView";
import "./App.css";
import ImageUpload from "./components/ImageUpload";


function App (){
  return <RouterProvider router={routeConfig}> </RouterProvider> 
}

const routeConfig = createBrowserRouter( [
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element: <PhotoGrid />
      },
      {
        path: "/viewPhoto/:photoIndex",
        element: <PhotoView />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/image-upload",
        element: <ImageUpload />
      }
    ]
  },
])
export default App;