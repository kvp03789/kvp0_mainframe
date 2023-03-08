import "../css/main.css";
import {createRain, handleResize} from './rain.js'
import {makeMove} from './cursor-effect'
import {addDomStuff} from './dom-stuff.js'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyD1QbxAk-FxBRjQYnq2pSnYPxJ7BxE4ZDI",
  authDomain: "weblounge-fbf01.firebaseapp.com",
  projectId: "weblounge-fbf01",
  storageBucket: "weblounge-fbf01.appspot.com",
  messagingSenderId: "167049559142",
  appId: "1:167049559142:web:53b9f8d58f59d4e38b81a7",
  measurementId: "G-9QRFWF32ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


console.log("hello firebase")





//window.addEventListener('DOMContentLoaded', createRain);

window.addEventListener('DOMContentLoaded', addDomStuff)

//CURSOR EVENT
document.addEventListener("click", (e) => {makeMove(e)});


