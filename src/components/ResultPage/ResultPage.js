import React, { useState, useEffect, useContext } from "react";
import ResultCard from "../ResultCard/ResultCard";
import { searchRepsByState } from "../../apiCalls";
import "./ResultPage.css";
import { UserContext } from "../App/userContext";

import { APP_URL } from "../../apiConfig";

const ResultPage = () => {
	const [filter, setFilter] = useState("All");
	const [userState, setUserState, resultList, setResultList] = useContext(
		UserContext
	);

	const makeCards = (list) => {
		if (!list.hasOwnProperty("results")) {
			return;
		}
		const senateCards = list.results[0].senate.map((sen) => (
			<ResultCard {...sen} />
		));
		const houseCards = list.results[1].house.map((rep) => (
			<ResultCard {...rep} />
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

	makeCards(resultList);

	return (
		<div className="results">
			<div className="search-results">{makeCards(resultList)}</div>
			<div className="filter">
				<p>Filter results:</p>
				<label>
					<input
						type="radio"
						value="All"
						checked={filter === "All"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					All results
				</label>
				<label>
					<input
						type="radio"
						value="Republican"
						checked={filter === "Republican"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					Republican
				</label>
				<label>
					<input
						type="radio"
						value="Democrat"
						checked={filter === "Democrat"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					Democrat
				</label>
				<label>
					<input
						type="radio"
						value="Independent"
						checked={filter === "Independent"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					Independent
				</label>
			</div>
		</div>
	);
};

export default ResultPage;
