//Imports
import React from "react";
import ResultPage from "../ResultPage/ResultPage";
import AllReps from "../AllReps/AllReps";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

//Component Imports
import HomePage from "../HomePage/HomePage";
import NavBar from "../Navbar/Navbar";
import SingleRep from "../SingleRep/SingleRep";

const App = () => {
	return (
		<main className="App">
			<header className="App-header"></header>
			<NavBar />
			<Switch>
				<Route exact path="/" render={() => <HomePage />} />
				<Route path="/results" render={() => <ResultPage />} />
				<Route path="/single-rep" render={() => <SingleRep />} />
				<Route path="/all" render={() => <AllReps />} />
			</Switch>
		</main>
	);
};

export default App;
