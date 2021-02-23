import { React } from "react";
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
			settingEmail={(e) => setEmail(e.target.value)}
			settingPassword={(e) => setPassword(e.target.value)}
			signUpWithEmail={signUpWithEmail}
		></Form>
	);
};

export default SignUp;
