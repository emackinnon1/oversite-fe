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
		<main className="App">
			<header className="App-header"></header>
			<NavBar/>
		<Switch>
			<Route 
				exact path = '/' 
				render = {() => <HomePage/>}/>
			<Route 
				path = '/results' 
				render ={() => <ResultPage/> }/>
		</Switch>
		</main>
	);
};

export default App;
