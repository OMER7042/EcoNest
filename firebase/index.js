import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnkG3LAgdlfJRLB8bK6m3TL5MHLNrtBe0",
  authDomain: "econest-e.firebaseapp.com",
  projectId: "econest-e",
  storageBucket: "econest-e.firebasestorage.app",
  messagingSenderId: "990943269232",
  appId: "1:990943269232:web:f59402c41dd10214b1ffb5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const GEMINAI_KEY= "YOUR_GEMINAI_API_KEY"; // Replace with your actual API key

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, db, storage,GEMINAI_KEY };
