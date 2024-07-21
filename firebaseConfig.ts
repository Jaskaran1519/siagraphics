// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD03M8cdlcw4N9jIKq7w6ZRnmVpWcJesXw",
  authDomain: "printing-5bf04.firebaseapp.com",
  projectId: "printing-5bf04",
  storageBucket: "printing-5bf04.appspot.com",
  messagingSenderId: "716743979119",
  appId: "1:716743979119:web:146505cd19f634186bdd9a",
  measurementId: "G-YG9JNG2Y64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, firebaseConfig };
