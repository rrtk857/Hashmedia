import React from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
//import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from 'react-router-dom';
function Navbar() {
    const { darkMode, toggle } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
        <div className="leftpane">
            <Link to="/" style={{ textDecoration:"none"}}>
                <span>Hashmedia</span>
            </Link>
            <HomeOutlinedIcon/>
            {darkMode? <LightModeOutlinedIcon onClick={toggle}/>:<DarkModeOutlinedIcon onClick={toggle}/>}
            <GridViewOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
        <div className="rightpane">
            <PersonOutlineOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className='username'>
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar