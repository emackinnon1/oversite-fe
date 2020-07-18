//Imports
import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage'


const App = () => {
	
	
	return (
		<main className="App">
			<header className="App-header"></header>
		<Switch>
			<Route exact path = '/' render = {() => 
			<HomePage/>
			}/>
		</Switch>
		</main>
	);
};

export default App;
