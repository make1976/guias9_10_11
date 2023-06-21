import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Principal from "./components/Principal";
import ErrorPage from "./components/ErrorPage";
import Counter from "./components/Counter";
import ListaTareas from "./components/ListaTareas";
import axios from 'axios';
import ApiGet from './components/ApiGet';
import { Button } from 'bootstrap';
import UserContext from './contexts/UserContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contar/",
          element: <Counter />,
        },
        {
          path: "listado/",
          element: <ListaTareas />,
          errorElement: <ErrorPage />,
        },
        {
          path: "consumo/",
          element: <ApiGet />,
          errorElement: <ErrorPage />
        },
        {
          path: "ApiGetFetch/",
          element: <ApiGet />,
          errorElement: <ErrorPage />
        },
      ],
    }
  ]);

  //return  <RouterProvider router={router} />;
  return (
    <>
      <UserContext>
        <Header />
        <div className="Body">
          <Sidebar />
          <Content />
        </div>
      </UserContext>
    </>
  )
}

export default App
