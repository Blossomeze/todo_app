import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBV9Au2WYj1GEd3kGuexU24KurlgicazpE",
  authDomain: "to-do-14e9f.firebaseapp.com",
  projectId: "to-do-14e9f",
  storageBucket: "to-do-14e9f.appspot.com",
  messagingSenderId: "853372048620",
  appId: "1:853372048620:web:155450810db0f75aeb81c9",
  measurementId: "G-KDRVX8RGXC"
};

const app = initializeApp(firebaseConfig);