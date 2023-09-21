import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
// import Header from './components/Header/Header.jsx';


const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <div>I am from home page using create react router</div>
  // },
  // {
  //   path: '/about',
  //   element: <div>I am here to you from about page using react router</div>
  // },
  // {
  //   path: '/contact',
  //   element: <div> hello there I am from contact page using react router </div>
  // }


  // component passing 
  // {
  //   path: '/',
  //   element: <Home></Home>
  // },
  // {
  //   path: '/Header',
  //   element: <Header></Header>
  // }


  // this we use for professional work
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
