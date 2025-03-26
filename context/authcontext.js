import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { darkTheme, lightTheme } from "../constants/theme";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const [messages, setMessages] = useState([]);

  const [communityStats, setCommunityStats] = useState({
    points: 0,
    savedCO2: 0,
    actionsCount: 0,
    name: "Green Life",
  });

  const fetchCommunityStats = async () => {
    const communityRef = doc(db, "communities", "Green Life"); // Adjust community ID if needed

    return onSnapshot(communityRef, (snapshot) => {
      if (snapshot.exists()) {
        const communityData = snapshot.data();
        setCommunityStats(communityData);
      } else {
        console.log("Community not found!");
      }
    });
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser({ ...user, id: user.uid });
        // fetch back the user details from firebase and update the user state with the new data
        fetchUser(user.uid);
      } else {
        console.log("😓 Not Auth => ");
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const messagesRef = collection(db, "communities", "Green Life", "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedMessages = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          _id: doc.id,
          text: data.text || "",
          createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
          user: data.user || { _id: "unknown", name: "Unknown User" },
        };
      });

      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, password, name) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("🔥 New User => ", email);
      // create a new user in the database with the response.user.uid if you want more details

      await setDoc(doc(db, "users", response?.user.uid), {
        email: response?.user.email,
        name,
        username: email.split("@")[0],
        id: response?.user.uid,
        profileUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        points: 0,
        actions: [],
        saved: 0,
        dailyTask: "",
        isPartOfCommunity: false,
        premiumSubscription: false,
        premiumExpiration: null,
        challenges: [],
        communityPoints: 0,
        comunitySaved: 0,
      });
      return { success: true, user: response?.user };
    } catch (e) {
      const msg = handleFirebaseError(e);
      return { success: false, msg };
    }
  };

  // Sign in an existing user
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: response?.user };
    } catch (e) {
      const msg = handleFirebaseError(e);
      return { success: false, msg };
    }
  };

  // Sign out the current user
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      const msg = handleFirebaseError(e);
      return { success: false, msg };
    }
  };

  //password reset function firebase

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (e) {
      const msg = handleFirebaseError(e);
      return { success: false, msg };
    }
  };

  const fetchUser = async (uid) => {
    fetchCommunityStats(); // Fetch community stats for the user
    const userRef = doc(db, "users", uid);
    onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        setUser(docSnap.data()); // Update user state with latest data
      } else {
        console.error("No such document!");
      }
    });
  };

  // Provide the AuthContext value to the children components
  const authContextValue = {
    user,
    setUser,
    isAuthenticated,
    register,
    login,
    logout,
    resetPassword,
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? darkTheme : lightTheme,
    messages,
    communityStats
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return value;
};

const handleFirebaseError = (error) => {
  console.error(error);
  let msg = error.message;
  if (msg.includes("auth/email-already-in-use")) {
    msg = "Email already in use";
  } else if (msg.includes("auth/invalid-email")) {
    msg = "Invalid email";
  } else if (msg.includes("auth/weak-password")) {
    msg = "Password should be at least 6 characters";
  } else if (msg.includes("auth/user-not-found")) {
    msg = "User not found";
  } else if (msg.includes("auth/invalid-credential")) {
    msg = "Invalid credentials";
  } else if (msg.includes("auth/too-many-requests")) {
    msg = "Too many requests, please try again later";
  } else if (msg.includes("auth/network-request-failed")) {
    msg = "Network request failed, please try again later";
  }

  return msg;
};
