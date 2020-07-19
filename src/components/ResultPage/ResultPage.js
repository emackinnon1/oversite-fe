import React, { useState } from "react";
import ResultCard from "../ResultCard/ResultCard";
import "./ResultPage.css";

const ResultPage = () => {
	const [filter, setFilter] = useState("All");

	return (
		<div className="results">
			<div className="search-results">
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

export default ResultPage;
