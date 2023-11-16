import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
apiKey: "AIzaSyBYggBg9prFRjX47YQZIkkltB-F2kk9VAA",
authDomain: "first-speproject.firebaseapp.com",
projectId: "first-speproject",
storageBucket: "first-speproject.appspot.com",
messagingSenderId: "428931316410",
appId: "1:428931316410:web:1b9fb7f2a56009019ba083"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);