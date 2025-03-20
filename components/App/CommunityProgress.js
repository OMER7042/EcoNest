import React from "react";
import { View } from "react-native";
import RNText from "../RNText";
import CircularProgress from "react-native-circular-progress-indicator";
import Colors from "../../constants/Colors";
import { calculateTreesPlanted } from "../../constants/helpers";
import { Image } from "expo-image";
const CommunityProgress = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 16,
      }}
    >
      <View
        style={{
          backgroundColor: "#222",
          width: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 26,
        }}
      >
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={
              "https://legacytree.world/wp-content/uploads/2019/02/community-shared-tree-sponsorship.jpg"
            }
            style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10 }}
            contentFit="cover"
          />
          <RNText font={"M-Medium"} style={{ color: "#fff", fontSize: 20 }}>
            Green Circle Community
          </RNText>
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <CircularProgress
            value={5.6}
            radius={90}
            progressValueColor={"#ecf0f1"}
            maxValue={1512}
            title={"kg CO₂eq"}
            titleColor={"white"}
            titleStyle={{ fontWeight: "bold" }}
            subtitle="You Saved"
            progressFormatter={(value) => {
              "worklet";

              return value.toFixed(1); // 2 decimal places
            }}
          />
        </View>
        <RNText
          font={"M-Regular"}
          style={{
            color: "#fff",
            fontSize: 15,
            paddingHorizontal: 14,
            textAlign: "center",
            marginVertical: 16,
          }}
        >
          Yay! Your CO₂ savings are equal what
          <RNText font={"M-Bold"} style={{ color: Colors.green }}>
            {" "}
            {calculateTreesPlanted(5.6)}{" "}
          </RNText>
          trees fix in a month.
        </RNText>
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: Colors.green,
          borderRadius: 26,
          marginTop: -50,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <RNText
          font={"M-Regular"}
          style={{
            color: "#000",
            fontSize: 16,
            textAlign: "center",
            marginTop: 65,
          }}
        >
          <RNText font={"M-Bold"} style={{ color: "#000" }}>
            Target : Save
          </RNText>{" "}
          6,000 kg CO₂eq
        </RNText>
      </View>
    </View>
  );
};

export default CommunityProgress;
