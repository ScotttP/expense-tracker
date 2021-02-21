import React from "react";
import firebase from "../FirebaseConfig";

const firebaseAuth = firebase.auth();

const Account = () => {
	const signOut = () => {
		firebaseAuth.signOut();
	};
	return (
		<div id="account" testid="accountRouteTest">
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
};

export default Account;
