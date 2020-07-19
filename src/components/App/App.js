//Imports
import React from "react";
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
			<Route exact path = '/' render = {() => 
			<HomePage/>
			}/>
		</Switch>
		</main>
	);
};

export default App;
