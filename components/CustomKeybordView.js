import React from "react";
import {
  Platform,
  ScrollView,
} from "react-native";
import { useTheme } from "react-native-paper";

const ios = Platform.OS === "ios";

const CustomKeyboardView = ({ children }) => {
  const {colors} = useTheme();
  return (

      <ScrollView
        style={{ flex: 1 ,
          backgroundColor: colors.background
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {children}
      </ScrollView>
  );
};

export default CustomKeyboardView;
