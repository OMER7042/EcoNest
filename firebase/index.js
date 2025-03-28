import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_tIcWFJ15mUAovJZspzXLBw5EAb-zU90",
  authDomain: "econest-app.firebaseapp.com",
  projectId: "econest-app",
  storageBucket: "econest-app.firebasestorage.app",
  messagingSenderId: "51819856025",
  appId: "1:51819856025:web:b6e02c73c253eea545f808"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, db, storage };
