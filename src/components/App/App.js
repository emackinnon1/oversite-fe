//Imports
import React from "react";
import ResultPage from "../ResultPage/ResultPage";
import AllReps from "../AllReps/AllReps";
import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';

//Component Imports
import HomePage from '../HomePage/HomePage'
import NavBar from '../Navbar/Navbar'

const App = () => {
	
	
	return (
<<<<<<< HEAD
		<main className="App">
			<header className="App-header"></header>
			<NavBar/>
		<Switch>
			<Route exact path = '/' render = {() => 
			<HomePage/>
			}/>
		</Switch>
		</main>
=======
		<div className="App">
			{/* <ResultPage /> */}
			<AllReps />
		</div>
>>>>>>> 7b7d1d1b35b4ab61d3e89976335c257e2e77cccb
	);
};

export default App;
