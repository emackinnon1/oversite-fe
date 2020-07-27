//Imports
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import StatePicker from "../StatePicker/StatePicker";
import { searchRepsByState } from "../../apiCalls";

//App Imports
import "./HomePage.css";
import { UserContext } from "../App/userContext";
import { APP_URL } from "../../apiConfig";

const HomePage = () => {
	const [userState, setUserState, resultList, setResultList] = useContext(
		UserContext
	);

	const [searchInput, setSearchInput] = useState("");
	const [searchParam, setSearchParam] = useState("state");

	const searchByState = async (e, stateToSearch) => {
		e.preventDefault();
		setResultList(await searchRepsByState(APP_URL, stateToSearch));
	};

	return (
		<section className="home-page-container">
			<img
				className="seal-logo"
				src="/images/usa_seal.svg"
				alt="usa congress seal"></img>
			<h1>Search for Senators and Representatives</h1>
			<form className="search-container">
				<select
					className="search-params"
					id="search-params"
					name="search-options"
					onChange={(e) => setSearchParam(e.target.value)}
					defaultValue={searchParam}>
					<option className="search-option" value="state">
						State
					</option>
					<option disabled className="search-option" value="name">
						Name
					</option>
					<option disabled className="search-option" value="zip">
						Zip
					</option>
					<option disabled value="committee">Committee</option>
				</select>
				{searchParam === "state" ? (
					<StatePicker
						setSearchInput={setSearchInput}
					/>
				) : (
					<input
						className="search-input"
						type="text"
						placeholder="Search"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}></input>
				)}
				<button
					type="submit"
					className="search-btn"
					onClick={(e) => searchByState(e, searchInput)}>
					<Link to={searchParam === "state" && "/results"}>
						<img src="/images/search.svg" alt="search icon" />
					</Link>
				</button>
			</form>
		</section>
	);
};

export default HomePage;
