import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'

const NavBar = () => {
    
    
    
    
    return (

        <nav>
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="all-reps"> All Representatives </NavLink>
            <NavLink className="nav-link" to="">Search</NavLink>
        </nav>

    )

}


export default NavBar
