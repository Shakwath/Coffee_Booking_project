import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Coffee from '../Pages/Coffee';
import Dashboard from '../Pages/Dashboard';
import Contect from '../Pages/Contect';
import Home from '../Pages/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
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
      ],
    },
]);

export default router;