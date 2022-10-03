// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Tc7I_qVLY1fMiWxH5Q4nSdRpbggehFo",
  authDomain: "netflix-clone-1059e.firebaseapp.com",
  projectId: "netflix-clone-1059e",
  storageBucket: "netflix-clone-1059e.appspot.com",
  messagingSenderId: "870550332159",
  appId: "1:870550332159:web:c22816a9a0fbbf01a0a2ca",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
