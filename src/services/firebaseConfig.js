import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7_v29BNL-4_fjoKtuHPb-qUzDLmvp3uE",
  authDomain: "portalsuporte-a14e8.firebaseapp.com",
  projectId: "portalsuporte-a14e8",
  storageBucket: "portalsuporte-a14e8.appspot.com",
  messagingSenderId: "741602529741",
  appId: "1:741602529741:web:070e092e4d4675b4b77484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);