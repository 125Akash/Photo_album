// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6q4-5N7yswTnNgefKyd_nglzUcDA-c-8",
  authDomain: "fir-project-40c0d.firebaseapp.com",
  projectId: "fir-project-40c0d",
  storageBucket: "fir-project-40c0d.appspot.com",
  messagingSenderId: "827903227117",
  appId: "1:827903227117:web:206554282162e7ae0908e4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
