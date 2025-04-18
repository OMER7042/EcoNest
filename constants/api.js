import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, GEMINAI_KEY } from "../firebase";
import { Alert } from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
    expirationDate.setDate(expirationDate.getDate() + 30); // Add 30 days

    await updateDoc(userRef, {
      premiumSubscription: true,
      premiumExpiration: expirationDate,
    });
    Alert.alert(
      "Congratulations!",
      "You are now a premium member for 30 days!"
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

// services/getSmartGoalsFromGemini.js

// Replace with your actual Gemini API key
const API_KEY = GEMINAI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// The actual function to call Gemini
export const getSmartGoalsFromGemini = async (userData) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
The following is a list of completed sustainable actions by a user, including daily tasks and challenges. Each action has a title, points earned, estimated environmental impact saved (in some unit like kg CO₂ or liters), and some motivational messaging.

Here is the user's completed data:
${JSON.stringify(userData, null, 2)}

Based on this activity history, generate 5–10 new and engaging eco-goals that the user can complete in the upcoming week. These should be:
- Gamified and fun (like “Zero Waste Week” or “Meatless Mondays”)
- Focused on sustainability and eco-friendliness
- Personalized based on their past activity
- Varying in difficulty and creativity
- Each goal should be in the format:

{
 id: a unique number
 title: a short, catchy goal (e.g., "Plant a Tree This Week")
 points: between 2 and 5 based on impact/difficulty
 saved: estimated environmental benefit (e.g., in kg CO₂)
 successTitle: a short motivational phrase (like “Way to grow!” or “Shower power!”)
 successSubtitle: 1-line encouraging message tied to the action
 info: 2-3 sentence explanation of why this goal is good for the environment (written in a friendly, motivational tone)

}

⚠️ IMPORTANT: Return only a valid JSON array of objects. Do not include any explanation or description.
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Try parsing JSON
    const jsonStart = text.indexOf("[");
    const jsonEnd = text.lastIndexOf("]") + 1;
    const jsonString = text.slice(jsonStart, jsonEnd);
    const smartGoals = JSON.parse(jsonString);

    return smartGoals;
  } catch (error) {
    console.error("Gemini API error:", error);
    return [];
  }
};

export const addGoalsToUser = async (userId, goals) => {
  try {
    const userRef = doc(db, "users", userId);

    const goalsWithStatus = goals.map((goal) => ({
      ...goal,
      status: false, // or "in-progress", if you want more granularity
      img: "https://thumbs.dreamstime.com/b/sustainable-goal-wooden-target-icon-grass-background-representing-eco-friendly-achievement-364866012.jpg",
    }));

    await updateDoc(userRef, {
      goals: arrayUnion(...goalsWithStatus),
    });

    console.log("Goals added successfully!");
  } catch (error) {
    console.error("Error adding goals: ", error);
  }
};

export const updateGoalStatus = async (userId, goalId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const updatedGoals = userData.goals.map((goal) =>
        goal.id === +goalId ? { ...goal, status: true } : goal
      );

      console.log(updatedGoals);

      await updateDoc(userRef, { goals: updatedGoals });
      console.log("Goal status updated!");
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error updating goal status: ", error);
  }
};

export const clearUserGoals = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { goals: [] });
    console.log("All goals cleared!");
  } catch (error) {
    console.error("Error clearing goals: ", error);
  }
};
