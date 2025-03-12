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
import { StatusBar } from "expo-status-bar";

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
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            bottom: hp(10),
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
    width: widthPercentageToDP(120),
    height: '100%',
    resizeMode: "contain",
  },
});
