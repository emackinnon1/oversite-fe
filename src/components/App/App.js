//Imports
import React, { useEffect,useContext } from "react";
import ResultPage from "../ResultPage/ResultPage";
import AllReps from "../AllReps/AllReps";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { getUsers } from '../../apiCalls'
import { UserContext } from "./userContext"
//Component Imports
import HomePage from "../HomePage/HomePage";
import NavBar from "../Navbar/Navbar";
import SingleRep from "../SingleRep/SingleRep";

const App = () => {
	const [userState, setUserState] = useContext(UserContext)

	useEffect(() => {
		let mounted = true;
		const getUserData = async () => {
			setUserState(await getUsers())
		}
		if (mounted) {
			if (process.env.NODE_ENV === "production") {
				getUserData(process.env.REACT_APP_PRODUCTION_URL)
			} else if (process.env.NODE_ENV === "development") {
				getUserData(process.env.REACT_APP_DEVELOPMENT)
			}
		}
		return () => mounted = false;
	}, [])

	


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
