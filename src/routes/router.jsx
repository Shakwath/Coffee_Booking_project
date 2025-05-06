import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Coffee from '../Pages/Coffee';
import Dashboard from '../Pages/Dashboard';
import Contect from '../Pages/Contect';
import Home from '../Pages/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader : ()=> fetch ('../assets/categories.json'),
         },
       {
        path: "/Coffee",
        element: <Coffee></Coffee>,
       },
       {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
       },
        {
        path: "/Contect",
        element: <Contect></Contect>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ],
    },
]);

export default router;