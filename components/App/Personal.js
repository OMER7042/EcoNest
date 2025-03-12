import React, { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import RNText from "../../components/RNText";
import { useVideoPlayer, VideoView } from "expo-video";
import CircularProgress from "react-native-circular-progress-indicator";
import Colors from "../../constants/Colors";
import { Image } from "expo-image";
import TargetImg from "../../assets/app/target.png";
import { calculateTreesPlanted } from "../../constants/helpers";
const Personal = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 16,
      }}
    >
      <View
        style={{
          height: 200,
          borderRadius: 26,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <RNText
              font={"M-Bold"}
              style={{ fontSize: 24, color: Colors.primary }}
            >
              Target{" "}
            </RNText>
            <Image source={TargetImg} style={{ width: 24, height: 24 }} />
          </View>

          <RNText font={"M-Medium"} style={{ fontSize: 20, color: "#fff" }}>
            Save 1,512 Kg CO2
          </RNText>
        </View>

        <Image
          source={{
            uri: "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          contentFit="fill"
          style={styles.video}
        />
      </View>

      <View
        style={{
          backgroundColor: "#111",
          marginTop: -1,
          width: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: 26,
          borderBottomRightRadius: 26,
        }}
      >
        <View
          style={{
            marginTop: -80,
          }}
        >
          <CircularProgress
            value={5.6}
            radius={90}
            progressValueColor={"#ecf0f1"}
            maxValue={1512}
            title={"kg CO2eq"}
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
          Yay! Your CO2 savings are equal what
          <RNText font={"M-Bold"} style={{ color: Colors.green }}>
            {" "}
            {
              calculateTreesPlanted(5.6) 
            }{" "}
          </RNText>
          trees fix in a month.
        </RNText>
      </View>
    </View>
  );
};

export default Personal;
const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "flex-start",
  },
});
