import React, { useContext, useState } from "react";
import MinimalLayout from "../../components/Layout/MinimalLayout";
import RNText from "../../components/RNText";
import { ActivityIndicator, List, useTheme } from "react-native-paper";
import { Image } from "expo-image";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Alert, TouchableOpacity, View } from "react-native";
import { POINTS_IMG_URL, TASKS } from "../../constants/constants";
import { router } from "expo-router";

import Colors from "../../constants/Colors";
import { AuthContext } from "../../context/authcontext";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PointsImage from "../../assets/app/goals.png";
import GeminiImage from "../../assets/app/geminibrain2.png";
import {
  addGoalsToUser,
  clearUserGoals,
  getSmartGoalsFromGemini,
} from "../../constants/api";

const Goals = () => {
  const { colors } = useTheme();
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const isEligible = user?.actions.length > 0;

  const userGoals = user?.goals || [];

  const handleActionPress = async () => {
    setIsLoading(true);
    const goals = await getSmartGoalsFromGemini(user?.actions);

    setIsLoading(false);
    if (goals.length > 0) {
      await addGoalsToUser(user?.id, goals);
      Alert.alert(
        "Eco-Goals Generated!",
        "Your personalized eco-goals have been generated successfully!",
        [
          {
            text: "OK",
          },
        ]
      );
    } else {
      Alert.alert(
        "No Eco-Goals Found",
        "We couldn't find any personalized eco-goals for you at this time.",
        [
          {
            text: "OK",
          },
        ]
      );
    }
  };

  return (
    <MinimalLayout showHeader>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={PointsImage}
          style={{
            width: widthPercentageToDP(80),
            aspectRatio: 1,
            marginBottom: -6,
          }}
          contentFit="cover"
        />
        <Image
          source={GeminiImage}
          style={{
            width: widthPercentageToDP(67),
            aspectRatio: 4,
            borderRadius: 15, // ← rounded corners
            marginTop: 2, // ← space from the top (in dp units)
            marginBottom: 5,
          }}
          contentFit="cover"
        />
      </View>
      {userGoals.length > 0 ? (
        <>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
            onPress={() => {
              Alert.alert(
                "Clear Goals",
                "Are you sure you want to clear your goals?",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: async () => {
                      await clearUserGoals(user?.id);
                      Alert.alert(
                        "Goals Cleared",
                        "Your goals have been cleared successfully!",
                        [
                          {
                            text: "OK",
                          },
                        ]
                      );
                    },
                  },
                ]
              );
            }}
            name="text-box-remove-outline"
            size={28}
            color={colors.text}
          />
          {userGoals.map((action) => (
            <TouchableOpacity
              key={action.id}
              style={{
                backgroundColor: colors.card,
                borderRadius: 20,
                padding: 10,
                margin: 10,
                flexDirection: "row",
              }}
              onPress={() => {
                router.push({
                  pathname: "goal",
                  params: {
                    title: action.title,
                    img: action.img,
                    points: action.points,
                    saved: action.saved,
                    info: action.info,
                    successTitle: action.successTitle,
                    successSubtitle: action.successSubtitle,
                    id: action.id,
                    status: action.status,
                  },
                });
              }}
            >
              {action.status && (
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={Colors.purple}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 6,
                    zIndex: 999,
                  }}
                />
              )}
              <Image
                source={action.img}
                style={{
                  width: widthPercentageToDP(30),
                  aspectRatio: 1,
                  borderRadius: 20,
                }}
                contentFit="cover"
              />
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: "space-between",
                }}
              >
                <RNText
                  style={{
                    fontSize: 16,
                    color: colors.text,
                  }}
                  font={"Poppins-SemiBold"}
                  numberOfLines={2}
                >
                  {action.title}
                </RNText>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 20,
                      borderWidth: 2.5,
                      borderColor: Colors.green,
                      padding: 3,
                      paddingHorizontal: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                    }}
                  >
                    <RNText
                      font={"Poppins-Bold"}
                      style={{
                        fontSize: 14,
                        color: colors.text,
                        marginTop: 2.5,
                      }}
                    >
                      {action.points}
                    </RNText>
                    <Image
                      source={POINTS_IMG_URL}
                      style={{ height: 20, aspectRatio: 1, color: "green" }}
                    />
                  </View>

                  <View
                    style={{
                      borderRadius: 20,
                      borderWidth: 2,
                      borderColor: Colors.green,
                      backgroundColor: Colors.green,
                      padding: 2.5,
                      paddingHorizontal: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <RNText font={"Poppins-SemiBold"} style={{ fontSize: 12 }}>
                      {action.saved} kg CO₂eq
                    </RNText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <>
          {isEligible ? (
            <View
              style={{
                color: colors.text,
                padding: 10,
                gap: 10,
                marginTop: 30,
              }}
            >
              <RNText
                font={"Poppins-Medium"}
                style={{
                  color: colors.text,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                🎉 We've Got What We Need!
              </RNText>
              <RNText
                font={"Poppins-Medium"}
                style={{
                  color: colors.text,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                You've been making some great moves toward sustainable living.
                Based on your recent activities, we've gathered enough insights
                to generate personalized eco-goals just for you.
              </RNText>

              {/* Button */}

              {isLoading ? (
                <View
                  style={{
                    backgroundColor: colors.gold,
                    borderRadius: 20,
                    padding: 10,
                    margin: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ActivityIndicator size={24} color={colors.black} />

                  <RNText
                    font={"Poppins-SemiBold"}
                    style={{
                      fontSize: 16,
                      color: colors.black,
                      marginLeft: 10,
                    }}
                    numberOfLines={2}
                  >
                    Generating Your Eco-Goals...
                  </RNText>
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.gold,
                    borderRadius: 20,
                    padding: 10,
                    margin: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={handleActionPress}
                >
                  <RNText
                    font={"Poppins-SemiBold"}
                    style={{
                      fontSize: 16,
                      color: colors.black,
                    }}
                    numberOfLines={2}
                  >
                    Generate Your Eco-Goals
                  </RNText>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            <View style={{ color: colors.text, padding: 10 }}>
              <RNText
                font={"Poppins-Medium"}
                style={{ color: colors.text, fontSize: 18 }}
              >
                🔍 Let's Get to Know You Better
              </RNText>
              <RNText
                font={"Poppins-Regular"}
                style={{ color: colors.text, fontSize: 16 }}
              >
                To give you personalized eco-goals, we need to learn a bit about
                your habits!
              </RNText>

              <RNText
                font={"Poppins-Regular"}
                style={{ color: colors.text, fontSize: 16 }}
              >
                Start by completing a few tasks like:
              </RNText>
              <List.Item
                title="• Logging your transportation, diet, or energy usage 🌍"
                titleNumberOfLines={2}
                titleStyle={{
                  fontFamily: "Poppins-Regular",
                  color: colors.text,
                }}
              />
              <List.Item
                title="• Completing at least one weekly eco-challenge 🏆"
                titleNumberOfLines={2}
                titleStyle={{
                  fontFamily: "Poppins-Regular",
                  color: colors.text,
                }}
              />
              <List.Item
                title="• Exploring some recycling or energy-saving tips ♻️"
                titleNumberOfLines={2}
                titleStyle={{
                  fontFamily: "Poppins-Regular",
                  color: colors.text,
                }}
              />
            </View>
          )}
        </>
      )}
    </MinimalLayout>
  );
};

export default Goals;
