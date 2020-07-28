import React, { useState, useContext, useEffect } from "react";
import ResultCard from "../ResultCard/ResultCard";
import "./ResultPage.css";
import { UserContext } from "../App/userContext";
import { APP_URL } from "../../apiConfig";
import ContentLoader from "react-content-loader";
import { searchRepsByState } from "../../apiCalls";

const ResultPage = ({ stateToSearch }) => {
	const [filter, setFilter] = useState("All");
	const [userState, setUserState, resultList, setResultList] = useContext(
		UserContext
	);
	const Loading = () => <ContentLoader />;

	useEffect(() => {
		if (!resultList.hasOwnProperty("results")) {
			let mounted = true;
			const getUserData = async (url, state) => {
				setResultList(await searchRepsByState(url, state));
			};
			if (mounted) {
				getUserData(APP_URL, stateToSearch);
			}
			return () => (mounted = false);
		}
	}, []);

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
				{!senateCards.length ? <p>No Senators Found</p> : senateCards}
				<h2>House of Representatives</h2>
				{!houseCards.length ? <p>No House Members Found</p> : houseCards}
			</>
		);
	};

	return (
		<>
			{!Object.keys(resultList).length ? (
				<Loading />
			) : (
				<div className="results">
					<h1>{stateToSearch} Search Results</h1>
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
					<div className="search-results">
						{makeCards(filterResults(filter, resultList))}
					</div>
				</div>
			)}
		</>
	);
};

export default ResultPage;
