import React, { useContext, useEffect } from "react";
import "./Profile.css";
import ResultCard from "../ResultCard/ResultCard";
import { APP_URL } from "../../apiConfig";
import { getUsers } from "../../apiCalls";
import { UserContext } from "../App/userContext";

const Profile = () => {
	const [user, setUser] = useContext(UserContext);

	useEffect(() => {
		let mounted = true;
		const getUserData = async (url) => {
			setUser(await getUsers(url));
		};
		if (mounted) {
			getUserData(APP_URL);
		}
		return () => (mounted = false);
	}, []);

	console.log(user);

	return (
		<div className="profile">
			<div className="my-reps">
				<h2>
					Hi, {user.first_name} {user.last_name}
				</h2>
				<p>{user.email}</p>
			</div>
		</div>
	);
};

export default Profile;
