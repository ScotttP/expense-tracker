import React from "react";
import {
	HashRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import "./App.css";
import Account from "./Components/Account";
import Dashboard from "./Components/Dashboard";
import History from "./Components/History";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

const App = () => {
	const currentUser = null;
	return (
		<Router>
			<Navbar></Navbar>
			<div id="content">
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							currentUser ? <Redirect to="/Dashboard" /> : <Login></Login>
						}
					></Route>
					<Route
						exact
						path="/Dashboard"
						render={() =>
							!currentUser ? <Redirect to="/Login" /> : <Dashboard></Dashboard>
						}
					></Route>

					<Route
						exact
						path="/History"
						render={() =>
							!currentUser ? <Redirect to="/Login" /> : <History></History>
						}
					></Route>
					<Route
						exact
						path="/Account"
						render={() =>
							!currentUser ? <Redirect to="/Login" /> : <Account></Account>
						}
					></Route>
					<Route exact path="/Login" component={Login}></Route>
					<Route exact path="/SignUp" component={SignUp}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
