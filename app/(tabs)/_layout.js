import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

export default function TabsLayout() {
  const { colors } = useTheme();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: colors.background},
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveBackgroundColor: colors.primary,
          tabBarActiveBackgroundColor: colors.background,
          headerStyle: {
            backgroundColor: colors.background,
          },
          tabBarItemStyle: {
            backgroundColor: "#fff",
            color: colors.primary,
          },
          tabBarLabelStyle: {
            fontFamily: "M-ExtraBold",
            fontSize: 8,
          },
          headerShadowVisible: false,
          // tabBarShowLabel: false,
          tabBarActiveTintColor: colors.green,
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
