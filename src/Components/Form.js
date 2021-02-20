import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Error from "../Error";
import styled from "styled-components";
import googleLogo from "../Assets/icons8-google.svg";
import firebase from "../FirebaseConfig";

const FormDiv = styled.div`
	height: 90vh;

	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 350px) {
		margin-top: 14px;
	}
`;

const SignUpAndLoginContainer = styled.form`
	background-color: #f8f2f2;
	color: #3030bd;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	align-items: center;

	height: 55vh;
	width: 25vw;
	min-width: 300px;
	max-width: 450px;
	min-height: 525px;
	max-height: 550px;
	border: solid 2px #3030bd;
	@media only screen and (max-width: 1500px) {
		height: 50vh;
		max-height: 500px;
	}
`;

const FormContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 20vw;
	height: 100%;
	min-width: 240px;
	max-height: 550px;
`;

const LoginHeader = styled.h1`
	margin: 5%;
`;

const FormLabels = styled.label`
	width: 20vw;
	min-width: 231px;
	margin: 5%;
	font-size: 13px;
`;

const FormInputs = styled.input`
	width: 100%;
	height: 2rem;
	margin-top: 10px;
	padding: 2%;
	border: 1px solid #3030bd;
	border-radius: 5px;
`;

const PasswordTextDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LoginButton = styled.button`
	&:hover {
		cursor: pointer;
		background-color: white;
		color: #3030bd;
	}
	width: 100%;
	height: 2rem;
	border: none;
	border-radius: 5px;
	background-color: #3030bd;
	color: #fff;
	border: 1px #3030bd solid;
	transition: 0.3s;
`;

const GoogleButton = styled.button`
	&:hover {
		cursor: pointer;
		background-color: #3030bd;
		color: #fff;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 2rem;
	border: none;
	border-radius: 5px;
	color: #3030bd;
	background-color: #f8f2f2;
	border: 1px #3030bd solid;
	transition: 0.3s;
`;

const GoogleLogo = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 5px;
`;

const DontHaveAnAccount = styled.p`
	margin: 5% 2% 2% 2%;
`;

const firebaseAuth = firebase.auth();

const Form = (props) => {
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
	const signUpWithEmail = (e) => {
		e.preventDefault();
		firebaseAuth
			.createUserWithEmailAndPassword(email, password)
			.catch((error) => {
				setErrors(error);
			});

		setErrors("");
	};

	const loginWithGoogle = (e) => {
		let provider = new firebase.auth.GoogleAuthProvider();
		firebaseAuth.signInWithPopup(provider);
	};

	return (
		<FormDiv>
			<SignUpAndLoginContainer>
				<FormContent>
					<LoginHeader>{props.formType}</LoginHeader>
					<FormLabels>
						Email
						<br></br>
						<FormInputs
							id="loginEmailInput"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
						></FormInputs>
					</FormLabels>
					<FormLabels>
						<PasswordTextDiv>
							Password
							<Link
								style={{ textDecoration: "none", color: "#3030bd" }}
								to="/ForgotPassword"
							>
								Forgot Your Password?
							</Link>
						</PasswordTextDiv>

						<FormInputs
							id="loginPasswordInput"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						></FormInputs>
					</FormLabels>
					{/* <Error errors={props.errors} /> */}
					<br></br>
					{props.formType === "Login" ? (
						<>
							<LoginButton onClick={(e) => loginWithEmail(e)}>
								<b>{props.formType}</b>
							</LoginButton>
						</>
					) : (
						<>
							<LoginButton onClick={(e) => signUpWithEmail(e)}>
								<b>{props.formType}</b>
							</LoginButton>
						</>
					)}

					<br></br>
					<p>or sign in with</p>
					<br></br>
					<GoogleButton onClick={(e) => loginWithGoogle(e)}>
						<GoogleLogo src={googleLogo}></GoogleLogo>
						<b>Google</b>
					</GoogleButton>
					<br></br>
					{props.formType === "Login" ? (
						<>
							<DontHaveAnAccount>Don't have an account?</DontHaveAnAccount>
							<Link style={{ textDecoration: "none" }} to="/SignUp">
								<b
									// onClick={props.resetErrors}
									style={{ textDecoration: "none", color: "#3030bd" }}
								>
									Sign Up
								</b>
							</Link>
						</>
					) : (
						<>
							<DontHaveAnAccount>Already Have An Account?</DontHaveAnAccount>
							<Link style={{ textDecoration: "none" }} to="/Login">
								<b
									// onClick={props.resetErrors}
									style={{ textDecoration: "none", color: "#3030bd" }}
								>
									Login
								</b>
							</Link>
						</>
					)}
				</FormContent>
			</SignUpAndLoginContainer>
		</FormDiv>
	);
};

export default Form;
