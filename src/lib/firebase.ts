
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCZvtFP2znzLKbwjZUWXYPSLYuzPnG8cG8",
  authDomain: "portafolio-profesional-8e537.firebaseapp.com",
  projectId: "portafolio-profesional-8e537",
  storageBucket: "portafolio-profesional-8e537.firebasestorage.app",
  messagingSenderId: "934423519352",
  appId: "1:934423519352:web:63c2c182c6931a0cb4cd8d",
  measurementId: "G-SL47VH7FFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);