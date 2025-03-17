import React from "react";
import { Stack } from "expo-router";

export default AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
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
    </Stack>
  );
};
