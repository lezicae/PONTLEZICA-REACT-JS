import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH2261zZOOW23XKsraebRYx0HI7Cqu8kg",
  authDomain: "pontlezica-reactjs.firebaseapp.com",
  projectId: "pontlezica-reactjs",
  storageBucket: "pontlezica-reactjs.appspot.com",
  messagingSenderId: "632108877834",
  appId: "1:632108877834:web:8c19930c851b3583dab7f3"
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;