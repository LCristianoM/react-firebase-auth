// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7-tiOYpxfaoxcIn5d9Kl1Cn-hco99Zuk",
  authDomain: "login-fb-auth.firebaseapp.com",
  projectId: "login-fb-auth",
  storageBucket: "login-fb-auth.appspot.com",
  messagingSenderId: "997985354832",
  appId: "1:997985354832:web:fa6bc8cd78dfd6b1e3fd55",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
