import { Linking, View } from "react-native";
import React from "react";
import RNText from "../../components/RNText";
import Colors from "../../constants/Colors";
import { router } from "expo-router";

const Organization = () => {
  return (
    <View
      style={{
        paddingTop: 50,
        flex: 1,
        backgroundColor: "#fff",
        gap: 8,
      }}
    >

        <RNText
          font={"M-Bold"}
          style={{
            fontSize: 24,
            color: Colors.primary,
            textAlign: "center",
          }}
        >
          Organization
        </RNText>
    </View>
  );
};

export default Organization;
