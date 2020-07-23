import React, { useState, useEffect, useContext } from "react";
import ResultCard from "../ResultCard/ResultCard";
import { searchRepsByState } from "../../apiCalls";
import "./ResultPage.css";
import { UserContext } from "../App/userContext";

import { APP_URL } from "../../apiConfig";

const ResultPage = (props) => {
	const [filter, setFilter] = useState("All");
	// const [searchList, setSearchList] = useState({});
	const [resultList, setResultList] = useContext(UserContext);

	// useEffect(() => {
	// 	let mounted = true;
	// 	const getSearchData = async (url) => {
	// 		setResultList(await searchRepsByState(url));
	// 	};
	// 	if (mounted) {
	// 		getSearchData(APP_URL);
	// 	}
	// 	return () => (mounted = false);
	// }, []);

	// const senateCards =
	// const houseCards =

	return (
		<div className="results">
			<div className="search-results">{/* {cards} */}</div>
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
