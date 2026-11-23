// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn9f5K-p8Rm3q1Yo-Xxf3EbSBTomL-JWI",
  authDomain: "internarea-911d8.firebaseapp.com",
  projectId: "internarea-911d8",
  storageBucket: "internarea-911d8.firebasestorage.app",
  messagingSenderId: "772364494502",
  appId: "1:772364494502:web:17adcd5035176cb00ff667",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
