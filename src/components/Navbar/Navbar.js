import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
	return (
		<nav>
			<NavLink className="nav-link" to="/">
				Home
			</NavLink>
			<NavLink className="nav-link" to="/all">
				All Representatives
			</NavLink>
		</nav>
	);
};

export default NavBar;
