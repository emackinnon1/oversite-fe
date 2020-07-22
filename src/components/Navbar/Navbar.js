import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


import "./Navbar.css";
import { UserContext } from "../App/userContext";

const NavBar = () => {

	const  [userState, setUserState] = useContext(UserContext)

	return (
		<nav>
			<NavLink className="nav-link" to="/">
				Home
			</NavLink>
			<NavLink className="nav-link" to="/all">
				All Representatives
			</NavLink>
			<p>{userState.user}</p>
		</nav>
	);
};

export default NavBar;
