import {
  View,
  Pressable,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Image } from "expo-image";

import { blurhash } from "../../constants";
import CustomKeyboardView from "../../components/CustomKeybordView";
import { AuthContext } from "../../context/authcontext";
import ProfileImage from "../../components/ProflieImage";
import RNText from "../../components/RNText";
import { saveProfileUrl } from "../../constants/api";
import { List, useTheme } from "react-native-paper";
import { router } from "expo-router";

const Profile = () => {
  const { user, logout, isDarkMode, toggleTheme } = useContext(AuthContext);

  const { colors } = useTheme();

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: wp(5),
        backgroundColor: colors.background,
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            height: hp(20),
            aspectRatio: 1,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "#D1D5DB",
          }}
          source={
            user?.profileUrl
              ? user?.profileUrl
              : "https://cdn3d.iconscout.com/3d/premium/thumb/user-3711728-3105450.png?f=webp"
          }
          placeholder={blurhash}
          transition={500}
        />
      </View>
      <RNText
        font={"M-Bold"}
        style={{
          color: colors.text,
          fontSize: 16,
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {user?.email}
      </RNText>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 16,
        }}
      >
        <List.Section
          style={{
            width: widthPercentageToDP(90),
            gap: 8,
          }}
        >
          {user?.premiumSubscription && (
            <List.Item
              style={{
                backgroundColor: colors.card,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}
              title="Premium Subscription"
              titleStyle={{
                fontFamily: "M-Bold",
                textTransform: "capitalize",
              }}
              //days left for subscription user?.premiumExpiration:{"nanoseconds": 401000000, "seconds": 1744391137}
              description={
                user?.premiumExpiration
                  ? `Days left: ${Math.floor(
                      (user?.premiumExpiration.seconds - Date.now() / 1000) /
                        (60 * 60 * 24)
                    )}`
                  : "No subscription"
              }
              descriptionStyle={{
                fontFamily: "M-Medium",
              }}
              left={() => <List.Icon icon="star-circle-outline" />}
            />
          )}
          {/* <List.Item
              style={{
                backgroundColor: colors.card,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}
              // onPress={() => {
              //   router.push("updateProfile");
              // }}
              title="Email"
              titleStyle={{
                fontFamily: "M-Bold",
                textTransform: "capitalize",
              }}
              description={user?.email}
              descriptionStyle={{
                textTransform: "capitalize",
                fontFamily: "M-Medium",
              }}
              left={() => <List.Icon icon="email" />}
            /> */}
          <List.Item
            style={{
              backgroundColor: colors.card,
              paddingHorizontal: 16,
              borderRadius: 8,
            }}
            title="Edit Profile"
            titleStyle={{
              fontFamily: "M-Bold",
              textTransform: "capitalize",
            }}
            description={"Edit your profile"}
            descriptionStyle={{
              fontFamily: "M-Medium",
            }}
            left={() => <List.Icon icon="account-edit" />}
            onPress={() => {
              router.push("updateProfile");
            }}
          />
          <List.Item
            style={{
              backgroundColor: colors.card,
              paddingHorizontal: 16,
              borderRadius: 8,
            }}
            title="Actions History"
            titleStyle={{
              fontFamily: "M-Bold",
              textTransform: "capitalize",
            }}
            // all actions history I have taken
            description={"See all completed actions"}
            descriptionStyle={{
              fontFamily: "M-Medium",
            }}
            left={() => <List.Icon icon="history" />}
            onPress={() => {
              router.push("updateProfile");
            }}
          />

          <List.Item
            style={{
              backgroundColor: colors.card,
              paddingHorizontal: 16,
              borderRadius: 8,
            }}
            onPress={() => {
              toggleTheme();
            }}
            title="Switch Mode"
            titleStyle={{
              fontFamily: "M-Bold",
              textTransform: "capitalize",
            }}
            description={
              isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            descriptionStyle={{
              fontFamily: "M-Medium",
            }}
            left={() => (
              <List.Icon
                icon={isDarkMode ? "weather-sunny" : "weather-night"}
              />
            )}
          />
          <List.Item
            style={{
              backgroundColor: colors.card,
              paddingHorizontal: 16,
              borderRadius: 8,
            }}
            onPress={() => {
              //logout
              Alert.alert("Logout", "Are you sure you want to logout?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "Logout",
                  onPress: () => {
                    logout();
                  },
                },
              ]);
            }}
            title="Logout"
            titleStyle={{
              fontFamily: "M-Bold",
            }}
            description={"Logout from your account"}
            descriptionStyle={{
              textTransform: "capitalize",
              fontFamily: "M-Medium",
            }}
            left={() => <List.Icon icon="logout" />}
          />
        </List.Section>
      </View>

      {!user?.premiumSubscription && (
        <View
          style={{
            padding: 8,
            backgroundColor: colors.card,
            borderRadius: 16,
            paddingVertical: 16,
            borderWidth: 1.5,
            borderColor: colors.gold,
            marginBottom: 36,
          }}
        >
          <RNText
            font={"M-Medium"}
            style={{
              color: colors.text,
              fontSize: 18,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Upgrade to premium to join any community
          </RNText>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.gold,
              padding: 16,
              borderRadius: 16,
              borderWidth: 1,
              borderRadius: 16,
              padding: 16,
              marginVertical: 16,
            }}
            onPress={() => {
              Alert.alert(
                "Green Circle Life",
                "Are you sure you want to upgrade to premium?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "Upgrade",
                    onPress: () => {
                      // becomePremiumUser(user?.id);
                    },
                  },
                ]
              );
            }}
          >
            <RNText
              font={"M-Bold"}
              style={{ color: colors.black, fontSize: 18 }}
            >
              Try Premium for $0
            </RNText>
          </TouchableOpacity>

          <RNText
            font={"M-Regular"}
            style={{
              color: colors.text,
              fontSize: 14,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            14 days free trial then $2.99/month
          </RNText>
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;
