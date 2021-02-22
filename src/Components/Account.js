import React from "react";
import firebase from "../FirebaseConfig";

const firebaseAuth = firebase.auth();

const Account = () => {
	const signOut = () => {
		firebaseAuth.signOut();
	};
	return (
		<div id="account">
			<button data-testid="signOutButton" onClick={signOut}>
				Sign Out
			</button>
		</div>
	);
};

export default Account;
