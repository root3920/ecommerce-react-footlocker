// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ6f4Y2JNhBGLoZVi6eC8h19fNjNCATbg",
  authDomain: "react-footlocker-ecommerce.firebaseapp.com",
  projectId: "react-footlocker-ecommerce",
  storageBucket: "react-footlocker-ecommerce.appspot.com",
  messagingSenderId: "705555997406",
  appId: "1:705555997406:web:4a7ec90e0580c7a85bd84f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;