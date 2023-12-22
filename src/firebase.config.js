// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-0Z_Iqgz77jV_YZv3JlcJaJ586ZLfLuQ",
  authDomain: "online-job-portal-49781.firebaseapp.com",
  projectId: "online-job-portal-49781",
  storageBucket: "online-job-portal-49781.appspot.com",
  messagingSenderId: "426003838663",
  appId: "1:426003838663:web:ac9fd44da8c8e8f2b070e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};