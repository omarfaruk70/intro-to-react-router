import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>I am from home page using create react router</div>
  },
  {
    path: '/about',
    element: <div>I am here to you from about page using react router</div>
  },
  {
    path: '/contact',
    element: <div> hello there I am from contact page using react router </div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)