import React, { useState } from "react";
import "./AllReps.css";
import ResultCard from "../ResultCard/ResultCard";

const AllReps = () => {
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
			<div className="filter">
				<p>Filter results:</p>
				<label>
					<input
						type="radio"
						value="All"
						checked={filter === "All"}
						onClick={(e) => setFilter(e.target.value)}
					/>
					All results
				</label>
				<label>
					<input
						type="radio"
						value="Republican"
						checked={filter === "Republican"}
						onClick={(e) => setFilter(e.target.value)}
					/>
					Republican
				</label>
				<label>
					<input
						type="radio"
						value="Democrat"
						checked={filter === "Democrat"}
						onClick={(e) => setFilter(e.target.value)}
					/>
					Democrat
				</label>
				<label>
					<input
						type="radio"
						value="Independent"
						checked={filter === "Independent"}
						onClick={(e) => setFilter(e.target.value)}
					/>
					Independent
				</label>
			</div>
		</div>
	);
};

export default AllReps;
