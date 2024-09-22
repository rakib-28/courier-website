import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration for Merchant
const merchantConfig = {
  apiKey: "AIzaSyDyGGRY2V89tNkNjGmFlyTzTc4TUokDcbw",
  authDomain: "courier-website-1.firebaseapp.com",
  projectId: "courier-website-1",
  storageBucket: "courier-website-1.appspot.com",
  messagingSenderId: "823041051840",
  appId: "",
};

// Firebase configuration for Rider
const riderConfig = {
  apiKey: "AIzaSyBOLhJPzADyB7xhf-pICP-s0NMo5NHdCvM",
  authDomain: "courier-website-2.firebaseapp.com",
  projectId: "courier-website-2",
  storageBucket: "courier-website-2.appspot.com",
  messagingSenderId: "21348768766",
  appId: "",
};

// Initialize Firebase for Merchant
const merchantApp = initializeApp(merchantConfig, "merchantApp");
export const merchantAuth = getAuth(merchantApp);
export const merchantDb = getFirestore(merchantApp);

// Initialize Firebase for Rider
const riderApp = initializeApp(riderConfig, "riderApp");
export const riderAuth = getAuth(riderApp);
export const riderDb = getFirestore(riderApp);
