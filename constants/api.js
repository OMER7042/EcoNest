import { arrayUnion, doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Alert } from "react-native";

export const saveProfileUrl = async (id, url) => {
  try {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
      profileUrl: url,
    });
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false, msg: e.message };
  }
};
export const updateProflie = async (id, data) => {
  try {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
      ...data,
    });
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false, msg: e.message };
  }
};

// // Function to update user profile (Name & Profile URL)
// export const updateUserProfile = async (userId, name, profileUrl) => {
//   try {
//     const userRef = doc(db, "users", userId);
//     await updateDoc(userRef, {
//       name,
//       profileUrl,
//     });
//     console.log("User profile updated successfully!");
//   } catch (error) {
//     console.error("Error updating user profile:", error);
//   }
// };

// Function to update Daily Task, Actions, Points & Community Stats
export const addNewEntry = async (userId, data) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return { success: false, msg: "User not found" };
    }

    const user = userSnap.data();
    const updates = {
      points: increment(data.points),
      saved: increment(data.saved),
      actions: arrayUnion(data),
    };

    if (data.type === "Challenge") {
      if (user.challenges?.includes(data.id)) {
        return { success: false, msg: "Already completed this challenge" };
      }
      updates.challenges = arrayUnion(data.id);
    } else if (data.type === "Daily Task") {
      const today = getTodayDate();
      if (user.dailyTask === today) {
        return { success: false, msg: "Already completed daily task" };
      }
      updates.dailyTask = today;
    }

    // If part of the community, update community-related stats
    if (user.isPartOfCommunity) {
      updates.communityPoints = increment(data.points);
      updates.communitySaved = increment(data.saved);
      await updateCommunityStats(data.points, data.saved);
    }

    await updateDoc(userRef, updates);
    console.log(`${data.type} updated successfully for user!`);
    return { success: true };
  } catch (error) {
    console.error("Error updating user entry:", error);
    return { success: false, msg: error.message };
  }
};
// Function to join the community
export const joinCommunity = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      isPartOfCommunity: true,
    });

    console.log("User joined the community!");
  } catch (error) {
    console.error("Error joining community:", error);
  }
};

// Function to leave the community
export const leaveCommunity = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      isPartOfCommunity: false,
    });

    console.log("User left the community!");
  } catch (error) {
    console.error("Error leaving community:", error);
  }
};

// Function to become a premium user (14 Days Free)
export const becomePremiumUser = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 14); // Add 14 days

    await updateDoc(userRef, {
      premiumSubscription: true,
      premiumExpiration: expirationDate,
    });
    Alert.alert(
      "Congratulations!",
      "You are now a premium member for 14 days!"
    );
  } catch (error) {
    console.error("Error updating premium status:", error);
  }
};
export const updateCommunityStats = async (points, savedCO2) => {
  try {
    const communityRef = doc(db, "communities", "Green Life");

    await updateDoc(communityRef, {
      points: increment(points), // Increment points
      savedCO2: increment(savedCO2), // Increment saved CO2
      actionsCount: increment(1), // Increment actions count
    });

    console.log("Community stats updated successfully!");
  } catch (error) {
    console.error("Error updating community stats:", error);
  }
};

const initializeCommunity = async (communityId) => {
  try {
    const communityRef = doc(db, "communities", communityId);
    const communitySnap = await getDoc(communityRef);

    // Check if community already exists
    if (!communitySnap.exists()) {
      await setDoc(communityRef, {
        name: communityId, // Name of the community
        points: 0, // Initial points
        savedCO2: 0, // Initial CO2 saved
        actionsCount: 0, // Empty actions array
      });

      console.log("Community initialized successfully!");
    } else {
      console.log("Community already exists!");
    }
  } catch (error) {
    console.error("Error initializing community:", error);
  }
};

// initializeCommunity("Green Life");
export const getTodayDate = () => new Date().toISOString().split("T")[0];
