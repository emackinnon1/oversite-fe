//Imports
import React, { useEffect, useContext } from "react";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { APP_URL } from "../../apiConfig";
import { getUsers } from "../../apiCalls";
import { UserContext } from "./userContext";

//Component Imports
import HomePage from "../HomePage/HomePage";
import NavBar from "../Navbar/Navbar";
import SingleRep from "../SingleRep/SingleRep";
import ResultPage from "../ResultPage/ResultPage";
import MyReps from "../MyReps/MyReps";
import Error from "../Error/Error";
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
				<Route exact path="/results" render={() => <ResultPage />} />
				<Route
					exact
					path="/member/:id"
					render={({ match }) => <SingleRep id={match.params.id} />}
				/>
				<Route exact path="/all" render={() => <MyReps />} />
				<Route component={Error} />
			</Switch>
		</main>
	);
};

export default App;
