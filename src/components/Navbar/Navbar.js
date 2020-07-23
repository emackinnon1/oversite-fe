import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Collapsible from "../Collapsible/Collapsible";

import "./Navbar.css";
import { UserContext } from "../App/userContext";

const NavBar = () => {
	const [userState, setUserState] = useContext(UserContext);
	const [panelState, togglePanel] = useState({ open: false });

	return (
		<nav>
			<div className="nav-links-container">
				<NavLink className="nav-link" to="/">
					Home
				</NavLink>
				<NavLink className="nav-link" to="/all">
					All Representatives
				</NavLink>
			</div>
			<div
				className="avatar-container"
				onClick={(e) => togglePanel({ open: !panelState.open })}>
				<img
					className="user-avatar"
					src="/images/user_icon.svg"
					alt="profile avatar"
				/>
				{panelState.open && (
					<div className="avatar-content">
						<ul>
							<li>{userState.first_name + " " + userState.last_name}</li>
							<li>{userState.email}</li>
							<li>{`${userState.street_address}, ${userState.state} ${userState.zip}`}</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
