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
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Post from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
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
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',

        // loader function for loading data
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },

      // dynamic routing for everyUser
      {
        path: 'user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/user/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post></Post>
      },
      {
        path: '/post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
