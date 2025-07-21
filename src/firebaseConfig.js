import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA6sHvQLAPpBAVVRY8ogcrEzerIy-_6lyA",
  authDomain: "animals-2711a.firebaseapp.com",
  projectId: "animals-2711a",
  storageBucket: "animals-2711a.firebasestorage.app",
  messagingSenderId: "178003236935",
  appId: "1:178003236935:web:50387d40ab463c10df7962"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)