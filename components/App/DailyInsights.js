import { Pressable, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RNText from "../RNText";
import Colors from "../../constants/Colors";
import YoutubePlayer from "react-native-youtube-iframe";
import { Entypo } from "@expo/vector-icons";
import { getDailyTip, getWeeklyTip } from "../../constants/constants";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useTheme } from "react-native-paper";

const DailyInsights = ({ item }) => {
  const { colors } = useTheme();
  const [count, setCount] = useState(0);
  const ID = item.id;
  if (ID === 1) {
    return (
      <View
        style={{
          height: 260,
          width: 260,
          overflow: "hidden",
          position: "relative",
          marginRight: 10,
          padding: 12,
          borderRadius: 10,
          backgroundColor: colors.card,
        }}
      >
        <Entypo
          name="bookmarks"
          size={36}
          color={colors.green}
          style={{
            position: "absolute",
            top: 10,
            left: 10,
          }}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RNText
            font={"M-Medium"}
            style={{
              fontSize: 20,
              color: colors.text,
              textAlign: "center",
            }}
          >
            {getDailyTip(count)}
          </RNText>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.green,
              padding: 3.5,
              borderRadius: 6,
            }}
          >
            <RNText font={"M-SemiBold"} style={{ fontSize: 12, color: "#000" }}>
              Daily Tip
            </RNText>
          </View>
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.text,
              padding: 10,
              width: "100%",
              borderRadius: 6,
            }}
            onPress={() => setCount((count) => (count + 1) % 31)}
          >
            <RNText font={"M-Medium"} style={{ fontSize: 16, color: colors.background }}>
            New Tip 🪴
            </RNText>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (ID === 2)
    return (
      <View
        style={{
          height: 260,
          width: 260,
          overflow: "hidden",
          position: "relative",
          marginRight: 10,
          padding: 12,
          borderRadius: 10,
          backgroundColor: Colors.green,
        }}
      >
        <Entypo
          name="bookmarks"
          size={36}
          color={Colors.black}
          style={{
            position: "absolute",
            top: 10,
            left: 10,
          }}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RNText
            font={"M-Medium"}
            style={{
              fontSize: 20,
              color: "#000",
              textAlign: "center",
            }}
          >
            {getWeeklyTip()}
          </RNText>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              padding: 3.5,
              borderRadius: 6,
            }}
          >
            <RNText font={"M-SemiBold"} style={{ fontSize: 12, color: "#000" }}>
              Weekly Tip
            </RNText>
          </View>
        </View>
      </View>
    );
  return (
    <View
      style={{
        height: 260,
        width: widthPercentageToDP(90),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
 
      }}
    >
      <View
        style={{
          width: "100%",
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.blue,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <YoutubePlayer
          height={"100%"}
          width={"100%"}
          play={false}

          videoId={item.url}
        />
      </View>
    </View>
  );
};

export default DailyInsights;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
