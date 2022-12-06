// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2t_vtBmvgH8Uk9l1YTJ41D7XYTXtDXPE",
  authDomain: "grupo3-nerdflix.firebaseapp.com",
  projectId: "grupo3-nerdflix",
  storageBucket: "grupo3-nerdflix.appspot.com",
  messagingSenderId: "394519938742",
  appId: "1:394519938742:web:9cb2bca720e29f04e24817"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);