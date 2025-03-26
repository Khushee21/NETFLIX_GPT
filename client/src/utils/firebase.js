// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsJtlnGxJaE1LDAIbFNfA0yoi0Hr02LpA",
  authDomain: "netflixgpt-f588a.firebaseapp.com",
  projectId: "netflixgpt-f588a",
  storageBucket: "netflixgpt-f588a.firebasestorage.app",
  messagingSenderId: "164506531494",
  appId: "1:164506531494:web:7b011c10f1315cda3c2667",
  measurementId: "G-NV4TZVJ0WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app; 
