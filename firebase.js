import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWGneEbx9Bp80f0v9zA6YgLf9U6DxxvpU",
  authDomain: "task-manager-f31ed.firebaseapp.com",
  projectId: "task-manager-f31ed",
  storageBucket: "task-manager-f31ed.appspot.com",
  messagingSenderId: "51680993140",
  appId: "1:51680993140:web:93037a359da41358211621",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
