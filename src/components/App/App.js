//Imports
import React, { useEffect, useContext } from "react";
import ResultPage from "../ResultPage/ResultPage";
import AllReps from "../AllReps/AllReps";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { getUsers } from "../../apiCalls";
import { UserContext } from "./userContext";
//Component Imports
import HomePage from "../HomePage/HomePage";
import NavBar from "../Navbar/Navbar";
import SingleRep from "../SingleRep/SingleRep";

import { APP_URL } from "../../apiConfig";

const App = () => {
	const [userState, setUserState] = useContext(UserContext);

	useEffect(() => {
		let mounted = true;
		const getUserData = async (url) => {
			setUserState(await getUsers(url));
			// twitterPing();
		};
		if (mounted) {
			getUserData(APP_URL);
		}
		return () => (mounted = false);
	}, []);

	return (
		<main className="App">
			<header className="App-header"></header>
			<NavBar />
			<Switch>
				<Route exact path="/" render={() => <HomePage />} />
				<Route path="/results" render={() => <ResultPage />} />
				<Route
					path="/member/:id"
					render={({ match }) => <SingleRep id={match.params.id} />}
				/>
				<Route path="/all" render={() => <AllReps />} />
			</Switch>
		</main>
	);
};

export default App;
