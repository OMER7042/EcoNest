import React, { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import RNText from "../../components/RNText";
import Colors from "../../constants/Colors";
import { useVideoPlayer, VideoView } from "expo-video";

const Onboarding = () => {
  const router = useRouter();
  const videoSource =
    "https://static.vecteezy.com/system/resources/previews/049/757/011/mp4/a-forest-with-lots-of-green-trees-free-video.mp4";
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });



  return (
    <Pressable
      style={{
        backgroundColor: Colors.black,
      }}
      onPress={() => router.push("/signin")}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: hp(100),
          width: wp(100),
        }}
      >
        <RNText
          font={"M-ExtraBold"}
          style={{
            fontSize: 44,
            textAlign: "center",
            color: "#fff",
          }}
        >
          EcoNest
        </RNText>
        <RNText
          font={"M-Medium"}
          style={{
            fontSize: 15.75,
            lineHeight: 24.5,
            color: "#fff",
            textAlign: "center",
            position: "absolute",
            bottom: 15,
          }}
        >
          Tap to Continue
        </RNText>
      </View>

      <VideoView
        style={styles.video}
        player={player}
        nativeControls={false}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  video: {
    width: widthPercentageToDP(113),
    height: heightPercentageToDP(113),
    resizeMode: "contain",
  },
});
