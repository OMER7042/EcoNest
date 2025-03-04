import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsVOMVOvo-za6bNi5KHPaFhYYoHqMNh4E",
  authDomain: "eco-nest-app.firebaseapp.com",
  projectId: "eco-nest-app",
  storageBucket: "eco-nest-app.firebasestorage.app",
  messagingSenderId: "774774732661",
  appId: "1:774774732661:web:d61ea916c92c59f386853c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, db, storage };
