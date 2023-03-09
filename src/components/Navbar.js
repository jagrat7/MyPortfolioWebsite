import React, {useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation()
    
    useEffect(
        () =>{setExpandNavbar(false)}, 
    [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}>
                <ReorderIcon></ReorderIcon>
            </button>
        </div>
        <div className="links">
            <Link className='navLink' to='/'>Home</Link>
            <a className='navLink' onClick={() => window.location.replace("/#exp")}>Experience</a>
            <a  className='navLink' onClick={() => window.location.replace("/#proj")}>Projects</a>
        </div>
    </div>
  )
}

export default Navbar