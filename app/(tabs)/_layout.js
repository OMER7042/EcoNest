import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "#fff" },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveBackgroundColor: Colors.primary,
          tabBarActiveBackgroundColor: Colors.background,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          tabBarItemStyle: {
            backgroundColor: "#fff",
            color: Colors.primary,
          },
          tabBarLabelStyle: {
            fontFamily: "M-ExtraBold",
            fontSize: 8,
          },
          headerShadowVisible: false,
          // tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.green,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerTitle: "Home",
            headerShown: false,
            title: "Home",

            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="actions"
          options={{
            headerTitle: "Actions",
            headerShown: false,

            title: "Actions",
            headerTitleStyle: {
              fontFamily: "M-ExtraBold",
              fontSize: 36,
            },
            headerStyle: {
              backgroundColor: Colors.yellow,
            },

            tabBarIcon: ({ size, color }) => (
              <Foundation name="foot" size={size + 4} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="challenges"
          options={{
            headerShown: false,
            headerTitle: "Challenges",
            title: "Challenges",
            headerTitleStyle: {
              fontFamily: "M-ExtraBold",
              fontSize: 36,
            },
            tabBarIcon: ({ size, color }) => (
              <Feather name="target" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="organization"
          options={{
            headerTitle: "Organization",
            title: "Organization",
            headerTitleStyle: {
              fontFamily: "M-ExtraBold",
              fontSize: 36,
            },

            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account-group-outline"
                size={size + 5}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
