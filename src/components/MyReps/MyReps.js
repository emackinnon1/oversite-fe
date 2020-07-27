import React, { useState } from "react";
import "./MyReps.css";
import ResultCard from "../ResultCard/ResultCard";

const MyReps = () => {
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

export default MyReps;
