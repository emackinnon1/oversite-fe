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

	const [searchTerm, setSearchTerm] = useState("");
	const [searchParam, setSearchParam] = useState("Name");
	const [usState, setUsState] = useState("AL");

	const searchByState = async (e, stateToSearch) => {
		e.preventDefault();
		setResultList(await searchRepsByState(APP_URL, stateToSearch));
	};

	console.log(resultList);

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
					<option className="search-option" value="name">
						Name
					</option>
					<option className="search-option" value="state">
						State
					</option>
					<option className="search-option" value="zip">
						Zip
					</option>
					<option value="committee">Committee</option>
				</select>
				{searchParam === "state" ? (
					<StatePicker
						width="40%"
						display="flex"
						flexDirection="column"
						height="4.8em"
						justifyContent="space-around"
						alignItems="center"
						selectWidth="100%"
						setUsState={setUsState}
					/>
				) : (
					<input
						className="search-input"
						type="text"
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}></input>
				)}
				<button
					type="submit"
					className="search-btn"
					onClick={(e) => searchByState(e, usState)}>
					<img src="/images/search.svg" alt="search icon" />
				</button>
			</form>
		</section>
	);
};

export default HomePage;
