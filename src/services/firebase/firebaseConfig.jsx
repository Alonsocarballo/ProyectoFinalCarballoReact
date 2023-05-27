import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDI_k1252lJGCk8XIMNzyShaAGKey0PR2o",
  authDomain: "preentrega3carballoreact.firebaseapp.com",
  projectId: "preentrega3carballoreact",
  storageBucket: "preentrega3carballoreact.appspot.com",
  messagingSenderId: "543197184322",
  appId: "1:543197184322:web:d9eebd508f951096f548db"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
