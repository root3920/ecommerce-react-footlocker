// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.REACT_TIENDA_SENCILLA_API_KEY,
authDomain: process.env.REACT_TIENDA_SENCILLA_AUTH_DOMAIN,
projectId: process.env.REACT_TIENDA_SENCILLA_PROJECT_ID,
storageBucket: process.env.REACT_TIENDA_SENCILLA_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_TIENDA_SENCILLA_MESSAGING_SENDER_ID,
appId: process.env.REACT_TIENDA_SENCILLA_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;