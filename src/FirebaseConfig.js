import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCBKHmASlpXYoEj0HtF0vAl_Q_UZn4dRIs",
	authDomain: "expense-tracker-70e61.firebaseapp.com",
	projectId: "expense-tracker-70e61",
	storageBucket: "expense-tracker-70e61.appspot.com",
	messagingSenderId: "40764790706",
	appId: "1:40764790706:web:f61c96647902623720b6ab",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
