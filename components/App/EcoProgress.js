import { View, Text } from "react-native";
import React, { useState } from "react";
import Personal from "./Personal";
import RNText from "../RNText";
import Colors from "../../constants/Colors";
import CommunityProgress from "./CommunityProgress";

const EcoProgress = () => {
  const [isStory, setIsStory] = useState(true);

  return (
    <View>
      <View
        style={{
          justifyContent: "space-evenly",
          backgroundColor: "#fff",
          alignItems: "center",
          marginTop: 20,
          borderRadius: 50,
          flexDirection: "row",
          borderColor: Colors.green,
          borderWidth: 2,
          padding: 5,
        }}
      >
        <RNText
          style={{
            flex: 1,
            backgroundColor: isStory ? Colors.primary : "#fff",
            color: isStory ? "#fff" : Colors.primary,
            padding: 8,
            paddingHorizontal: 10,
            borderRadius: 20,
            textAlign: "center",
          }}
          onPress={() => setIsStory(true)}
          font={"M-SemiBold"}
        >
          Personal
        </RNText>
        <RNText
          style={{
            flex: 1,
            backgroundColor: isStory ? "#fff" : Colors.primary,
            color: isStory ? Colors.primary : "#fff",
            padding: 8,
            paddingHorizontal: 10,
            borderRadius: 20,
            textAlign: "center",
          }}
          font={"M-SemiBold"}
          onPress={() => setIsStory(false)}
        >
          Community
        </RNText>
      </View>

      {isStory ? (
        <Personal />
      ) : (
        <CommunityProgress/>
      )}
    </View>
  );
};

export default EcoProgress;
