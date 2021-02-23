import React, { useEffect, useState } from "react";
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
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import firebase from "./FirebaseConfig";

const firebaseAuth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	const authStateChange = (user) => {
		if (user) return setLoggedIn(true);
		else return setLoggedIn(false);
	};
	useEffect(() => {
		const unsubscribe = firebaseAuth.onAuthStateChanged(authStateChange);
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Router>
			<Navbar currentUser={firebaseAuth.currentUser}></Navbar>
			<div id="content">
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							firebaseAuth.currentUser ? (
								<Redirect to="/Dashboard" />
							) : (
								<Login></Login>
							)
						}
					></Route>

					<Route
						exact
						path="/Login"
						render={() =>
							firebaseAuth.currentUser ? (
								<Redirect to="/Dashboard" />
							) : (
								<Login />
							)
						}
					></Route>

					<Route
						exact
						path="/SignUp"
						render={() =>
							firebaseAuth.currentUser ? (
								<Redirect to="/Dashboard" />
							) : (
								<SignUp></SignUp>
							)
						}
					></Route>
					<Route
						exact
						path="/Dashboard"
						render={() =>
							firebaseAuth.currentUser ? (
								<Dashboard></Dashboard>
							) : (
								<Redirect to="/Login" />
							)
						}
					></Route>

					<Route
						exact
						path="/History"
						render={() =>
							firebaseAuth.currentUser ? (
								<History></History>
							) : (
								<Redirect to="/Login" />
							)
						}
					></Route>
					<Route
						exact
						path="/Account"
						render={() =>
							firebaseAuth.currentUser ? (
								<Account></Account>
							) : (
								<Redirect to="/Login" />
							)
						}
					></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
