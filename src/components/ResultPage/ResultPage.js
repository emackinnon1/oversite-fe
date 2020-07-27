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

	const filterResults = (filterTerm, listToFilter) => {
		if (filterTerm === "All") {
			return listToFilter;
		}
		const filteredSenate = listToFilter.results[0].senate.filter(
			(member) => member.party === filterTerm && member
		);
		const filteredHouse = listToFilter.results[1].house.filter(
			(member) => member.party === filterTerm && member
		);

		return { results: [{ senate: filteredSenate }, { house: filteredHouse }] };
	};

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
		<div className="results">
			<div className="search-results">
				{makeCards(filterResults(filter, resultList))}
			</div>
			<div className="filter">
				<p>Filter results:</p>
				<label>
					<input
						type="radio"
						value="All"
						checked={filter === "All"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					&nbsp; All results
				</label>
				<label>
					<input
						type="radio"
						value="Republican"
						checked={filter === "Republican"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					&nbsp; Republican
				</label>
				<label>
					<input
						type="radio"
						value="Democrat"
						checked={filter === "Democrat"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					&nbsp; Democrat
				</label>
				<label>
					<input
						type="radio"
						value="Independent"
						checked={filter === "Independent"}
						onChange={(e) => setFilter(e.target.value)}
					/>
					&nbsp; Independent
				</label>
			</div>
			<div className="search-results">{makeCards(resultList)}</div>
		</div>
	);
};

export default ResultPage;
