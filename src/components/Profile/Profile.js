import React, { useState } from "react";
import "./Profile.css";
import ResultCard from "../ResultCard/ResultCard";

const Profile = () => {
	const [filter, setFilter] = useState("All");
	return (
		<div className="all-reps">
			<div className="all-reps-container">
				<ResultCard />
				<ResultCard />
				<ResultCard />
				<ResultCard />
				<ResultCard />
			</div>
		</div>
	);
};

export default Profile;
