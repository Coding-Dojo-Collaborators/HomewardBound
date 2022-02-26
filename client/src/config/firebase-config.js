// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBa7BZLc_Ut4mlQab69odB3SHK3pd3drJo",
  authDomain: "homeward-bound-342214.firebaseapp.com",
  projectId: "homeward-bound-342214",
  storageBucket: "homeward-bound-342214.appspot.com",
  messagingSenderId: "568067065323",
  appId: "1:568067065323:web:7d9d5829db84591836c5ae",
  measurementId: "G-34476MSNS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;