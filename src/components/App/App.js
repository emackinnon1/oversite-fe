//Imports
import React, { useEffect, useContext } from "react";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

//Component Imports
import HomePage from "../HomePage/HomePage";
import NavBar from "../Navbar/Navbar";
import SingleRep from "../SingleRep/SingleRep";
import ResultPage from "../ResultPage/ResultPage";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";

const App = () => {
	return (
		<main className="App">
			<header className="App-header"></header>
			<NavBar />
			<Switch>
				<Route exact path="/" render={() => <HomePage />} />
				<Route
					exact
					path="/results/:state"
					render={({ match }) => (
						<ResultPage stateToSearch={match.params.state} />
					)}
				/>
				<Route
					exact
					path="/member/:id"
					render={({ match }) => <SingleRep id={match.params.id} />}
				/>
				<Route exact path="/profile" render={() => <Profile />} />
				<Route component={Error} />
			</Switch>
		</main>
	);
};

export default App;
