import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  
  // apiKey: "AIzaSyAWOe1UchKQDUq8EbP7iHYkDU2lmFYfqkE",
  // authDomain: "bistro-boss-thakur.firebaseapp.com",
  // projectId: "bistro-boss-thakur",
  // storageBucket: "bistro-boss-thakur.appspot.com",
  // messagingSenderId: "575649369379",
  // appId: "1:575649369379:web:2869d3060abf1e2db15096",
};

export const app = initializeApp(firebaseConfig);
