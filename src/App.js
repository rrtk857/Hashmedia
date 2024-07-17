
import './App.css'
import './pages/style.scss';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import React from 'react';
import { useContext } from "react";
import { DarkModeContext } from './context/darkModeContext.js';
import { AuthContext } from './context/authContext.js';
//import { createMuiTheme } from "@material-ui/core/styles";
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  Outlet,
  Navigate,
} from "react-router-dom";
function App() {
  const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const Layout = () =>{
     return(
      
       <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{ display:"flex"}}>
        <LeftBar/>
        <div style={{flex:6}}><Outlet/></div>
        
        <RightBar/>
       </div>
       </div>
     )
  }
  const ProtectRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to = "/login"/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProtectRoute><Layout/></ProtectRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element:<Login></Login>,
    },
    {
      path: "/register",
      element:<Register></Register>,
    },
    
  ]);
  return (
    
      <div>
         <RouterProvider router = {router}/>
      </div>
      
      
  
  );
}

export default App;
