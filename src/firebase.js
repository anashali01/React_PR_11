// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuHYg1pjcZSaIOOFZuI36e2VjMkJ1GHTU",
  authDomain: "react-learn-b2837.firebaseapp.com",
  databaseURL: "https://react-learn-b2837-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-learn-b2837",
  storageBucket: "react-learn-b2837.firebasestorage.app",
  messagingSenderId: "27507598991",
  appId: "1:27507598991:web:37b90cbf0b205773dc32fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();