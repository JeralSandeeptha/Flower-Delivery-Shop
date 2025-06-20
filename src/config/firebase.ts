// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Ryt2iDpbLQg-BTeB_RBUGO8jc_gfDes",
  authDomain: "mobile-shop-16668.firebaseapp.com",
  projectId: "mobile-shop-16668",
  storageBucket: "mobile-shop-16668.firebasestorage.app",
  messagingSenderId: "789982188879",
  appId: "1:789982188879:web:783312611031de1c56a13a",
  measurementId: "G-PC9CCJGJGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {
  auth,
  app,
  analytics
}