import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import HomePage from './pages/HomePage'

import reportWebVitals from './reportWebVitals';
import BirthdayTerms from './pages/BirthdayTerms';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import App from './App';

const NavBarWrapper = () =>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  ) 
} 
const router = createBrowserRouter(
  
  [{ 
    path:'/',
    element:<NavBarWrapper/>,
    children:[ 
      {
        path: "/",
        element: <App></App>,
      },
  {
    path: "/home",
    element: <HomePage></HomePage>,
    errorElement:<h1>Error</h1>
  },
  
  {
    path: "/menu",
    element: <Menu></Menu>,
  },{
    path: "/contact",
    element: <Contact></Contact>,
  },{
    path: "/about",
    element: <About></About>,
  }
  ]
  
  },{
    path: "/birthdayterms",
    element: <BirthdayTerms></BirthdayTerms>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
