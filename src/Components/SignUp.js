import React, { useState } from "react";
import Form from "./Form/Form";
import firebase from "../FirebaseConfig";

const firebaseAuth = firebase.auth();

const SignUp = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState("");

	const signUpWithEmail = (e) => {
		e.preventDefault();
		firebaseAuth
			.createUserWithEmailAndPassword(email, password)
			.catch((error) => {
				setErrors(error);
			});

		setErrors("");
	};

	return (
		<Form
			formType="Sign Up"
			settingEmail={(e) => setEmail(e)}
			settingPassword={(e) => setPassword(e)}
			signUpWithEmail={signUpWithEmail}
		></Form>
	);
};

export default SignUp;
