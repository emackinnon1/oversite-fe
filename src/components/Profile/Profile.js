import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import ResultCard from "../ResultCard/ResultCard";
import { APP_URL } from "../../apiConfig";
import { getUser, getMyReps } from "../../apiCalls";
import { UserContext } from "../App/userContext";

const Profile = () => {
	const [user, setUser] = useContext(UserContext);
	const [myReps, setMyReps] = useState([]);


	useEffect(() => {
		let mounted = true;
		const getUserData = async (url) => {
			setUser(await getUser(url));
		};
		if (mounted) {
			getUserData(APP_URL);
		}
		return () => (mounted = false);
	}, []);

	useEffect(() => {
		let mounted = true;
		const getData = async (url) => {
			setMyReps(await getMyReps(url));
		};
		if (mounted) {
			getData(APP_URL);
		}
		return () => (mounted = false);
	}, [user]);

	const makeCards = (list) => {
		if (!list.hasOwnProperty("results")) {
			return;
		}
		const senateCards = list.results[0].senate.map((sen) => (
			<ResultCard {...sen} key={sen.id} />
		));
		const houseCards = list.results[1].house.map((rep) => (
			<ResultCard {...rep} key={rep.id} />
		));

		return (
			<>
				<h2>Senate</h2>
				{senateCards}
				<h2>House of Representatives</h2>
				{houseCards}
			</>
		);
	};

	return (
		<div className="profile">
			<div className="my-info">
				<h1>
					{user.first_name} {user.last_name}
				</h1>
				<div className="contact">
					<p>{user.email}</p>
					<p>
						{user.street_address} {user.state} {user.zip}
					</p>
					<p>District {user.district}</p>
				</div>
				<h2>My Representatives</h2>
			</div>
			<div className="my-reps">{makeCards(myReps)}</div>	
		</div>
	);
};

export default Profile;
