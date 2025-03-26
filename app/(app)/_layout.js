import React, { useContext } from "react";
import { router, Stack } from "expo-router";
import { useTheme } from "react-native-paper";
import { Alert, Pressable, TouchableOpacity } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../context/authcontext";
import { View } from "react-native";

export default AppLayout = () => {
  const { colors } = useTheme();
  const { logout } = useContext(AuthContext);

  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.background,
          },

          headerTintColor: colors.text,
          headerTitleStyle: {
            fontFamily: "M-Bold",
            fontSize: 26,
            alignSelf: "center",
            backgroundColor: "#000",
          },
          headerRight: () => (
            <View style={{ paddingRight: 15 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                }}
                onPress={() => {
                  console.log("clicked");
                  
                  Alert.alert("Logout", "Are you sure you want to logout?", [
                    {
                      text: "No",
                      onPress: () => {},
                    },
                    {
                      text: "Yes",
                      onPress: () => {
                        logout();
                      },
                    },
                  ]);
                }}
              >
                <MaterialIcons name="logout" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerTitleStyle: {
            fontFamily: "M-ExtraBold",
            fontSize: 36,
          },
        }}
      />
      <Stack.Screen
        name="action"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="challenge"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="rankings"
        options={{
          headerTitle: "LeaderBoard",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.background,
          },

          headerTintColor: colors.text,
          headerTitleStyle: {
            fontFamily: "M-Bold",
            fontSize: 26,
            alignSelf: "center",
            backgroundColor: "#000",
          },
          headerRight: () => (
            <Pressable
              style={{
                flexDirection: "row",
              }}
              onPress={() => {
                router.push("/home");
              }}
            >
              <Entypo name="home" size={24} color={colors.text} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="chat"
        options={{
          headerTitle: "Discussion",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.background,
          },

          headerTintColor: colors.text,
          headerTitleStyle: {
            fontFamily: "M-Bold",
            fontSize: 26,
            alignSelf: "center",
            backgroundColor: "#000",
          },
          headerRight: () => (
            <Pressable
              style={{
                flexDirection: "row",
              }}
              onPress={() => {
                router.push("/home");
              }}
            >
              <Entypo name="home" size={24} color={colors.text} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};
