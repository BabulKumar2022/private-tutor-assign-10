// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOUVBGg0wf2X7iTr-QkPsi3Eg_d1WtcCo",
  authDomain: "route-firebase-8a0e8.firebaseapp.com",
  projectId: "route-firebase-8a0e8",
  storageBucket: "route-firebase-8a0e8.appspot.com",
  messagingSenderId: "679097902789",
  appId: "1:679097902789:web:b12b08984bf3f308bc72ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;