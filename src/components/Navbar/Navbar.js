import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Collapsible from "../Collapsible/Collapsible";

import "./Navbar.css";
import { UserContext } from "../App/userContext";

const NavBar = () => {
	return (
		<nav>
			<div className="nav-links-container">
				<Link to="/">
					<img src="/images/logo.png" alt="logo" className="logo" />
				</Link>
			</div>
			<div className="avatar-container">
				<Link to="/profile">
					<img
						className="user-avatar"
						src="/images/user_icon.svg"
						alt="profile avatar"
					/>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
