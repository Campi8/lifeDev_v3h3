import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDNFkjAIy1zpNSrfNnuI2H_5Lod2kVWEYE",
  authDomain: "lifedev-kamycampi.firebaseapp.com",
  projectId: "lifedev-kamycampi",
  storageBucket: "lifedev-kamycampi.appspot.com",
  messagingSenderId: "58536192374",
  appId: "1:58536192374:web:03b787d6b10466dd9f7257",
  measurementId: "G-ZV0PFJGC7S"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};