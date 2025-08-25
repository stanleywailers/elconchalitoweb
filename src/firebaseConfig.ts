// src/firebase.ts
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqhH1pnUscBKpcedEWkrWwj99w-3YFmOc",
  authDomain: "elconchalito-5abc7.firebaseapp.com",
  databaseURL: "https://elconchalito-5abc7.firebaseio.com",
  projectId: "elconchalito-5abc7",
  storageBucket: "elconchalito-5abc7.appspot.com",
  messagingSenderId: "749877076936",
  appId: "1:749877076936:web:7c95be046bd1db991696fd",
  measurementId: "G-RTJC043L63",
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

export { analytics, app };

