// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTRKBgMkEEtNSTfkz_5_7zZAgZFUwbKyY",
  authDomain: "instagram-app-b57e9.firebaseapp.com",
  projectId: "instagram-app-b57e9",
  storageBucket: "instagram-app-b57e9.appspot.com",
  messagingSenderId: "659281375054",
  appId: "1:659281375054:web:78af6b3c0a5a4e6d8bf81f",
  measurementId: "G-Y8R72F63V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
// const analytics = getAnalytics(app);

export { auth, db };