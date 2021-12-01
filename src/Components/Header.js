import React from 'react'
import logo from '../Components/Img/Logo1.jpg'
import '../Components/CSS/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Avatar from '@mui/material/Avatar';


const Header = () => {
    return (
        <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-white" id="shaw">
   
   <div className="d-flex">
    <img  
   src={logo} 
   alt="" height="30px" width="30px" /> 
   <p className="ml-2">Drive</p> 
   </div>
      <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" /> </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-auto">
          <li className="nav-item active">
            
            <div className="d-flex">
          <span className=""><SearchIcon/></span>  
           <input type="text" placeholder="Search in Drive" className="Input"/>
           <ExpandMoreIcon />
           </div>
          </li>
          
        </ul>
      <span className="mr-3">
        <HelpOutlineIcon/>
        <SettingsIcon/>
        </span>
        <AppsOutlinedIcon/>
        <Avatar  sx={{ width: 35, height: 35 }} style={{color:"blue"}}>M</Avatar>                
      
      </div>
    </nav>

        </div>
    )
}

export default Header
