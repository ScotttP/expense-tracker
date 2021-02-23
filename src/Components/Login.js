import React, { useState } from "react";
import Form from "./Form/Form";
import firebase from "../FirebaseConfig";

const firebaseAuth = firebase.auth();

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState("");

	const loginWithEmail = (e) => {
		e.preventDefault();
		firebaseAuth.signInWithEmailAndPassword(email, password).catch((error) => {
			setErrors(error);
		});

		setErrors("");
	};

	const loginWithGoogle = (e) => {
		let provider = new firebase.auth.GoogleAuthProvider();
		firebaseAuth.signInWithPopup(provider);
	};

	return (
		<Form
			loginWithEmail={loginWithEmail}
			loginWithGoogle={loginWithGoogle}
			settingEmail={(e) => setEmail(e)}
			settingPassword={(e) => setPassword(e)}
			data-testid="formComponent"
			formType="Login"
		></Form>
	);
};

export default Login;
