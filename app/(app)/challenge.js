import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { router, useGlobalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import RNText from "../../components/RNText";
import { heightPercentageToDP } from "react-native-responsive-screen";
import HomeHeader from "../../components/HomeHeader";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../../constants/constants";
import { Image } from "expo-image";
import { useTheme } from "react-native-paper";
const ios = Platform.OS === "ios";

const Challenge = () => {
  const { title, info, img, points, footprint } = useGlobalSearchParams();
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme();
  return (
    <View
      style={{
        paddingTop: ios ? top : top,
        flex: 1,
        position: "relative",
        backgroundColor: colors.background,
      }}
    >
      <HomeHeader />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          position: "absolute",
          width: "100%",
          zIndex: 100,
          top: 100,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: heightPercentageToDP(28),
          position: "relative",
        }}
      >
        <Image source={img} contentFit="cover" style={styles.video} />
      </View>
      <RNText
        font={"M-Medium"}
        style={{
          fontSize: 18,
          textAlign: "center",
          padding: 16,
          width: "60%",
          alignSelf: "center",
          bottom: 25,
          backgroundColor: "#111",
          borderRadius: 16,
          color: "#fff",
          borderColor: colors.green,
          borderWidth: 2,
        }}
      >
        {title}
      </RNText>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
            backgroundColor: colors.card,
            borderRadius: 8,
          }}
        >
          <Image
            source={POINTS_IMG_URL}
            style={{ height: 30, aspectRatio: 1 }}
          />

          <View>
            <RNText
              style={{
                fontSize: 18,
                fontFamily: "M-Bold",
                color: Colors.green,
              }}
            >
              {points}
            </RNText>
            <RNText
              style={{
                color: colors.text,
              }}
            >
              Nest Points
            </RNText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
            borderRadius: 8,

            backgroundColor: colors.card,
          }}
        >
          <Image source={ECO_IMG_URL} style={{ height: 40, aspectRatio: 1 }} />
          <View>
            <RNText
              style={{
                fontSize: 18,
                fontFamily: "M-Bold",
                color: Colors.green,
              }}
            >
              {footprint}
            </RNText>
            <RNText
              style={{
                color: colors.text,
              }}
            >
              {" "}
              kg CO2eq Saved{" "}
            </RNText>
          </View>
        </View>
      </View>

      <RNText
        style={{
          margin: 16,
          fontSize: 16,
          fontFamily: "M-Regular",
          padding: 16,
          //line gap
          backgroundColor: colors.card,
          lineHeight: 24,
          borderRadius: 16,
          color: colors.text,
        }}
      >
        {info}
      </RNText>

      <View
        style={{
          height: 100,
          backgroundColor: Colors.green,
          borderTopEndRadius: 26,
          borderTopStartRadius: 26,
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => router.push("/home")}
          style={{
            backgroundColor: colors.background,
            padding: 10,
            borderRadius: 20,
            flexDirection: "row",
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RNText
            style={{
              fontSize: 16,
              color: colors.opposite,
            }}
            font={"Poppins-Medium"}
          >
            Log Action
          </RNText>
        </Pressable>
      </View>
    </View>
  );
};

export default Challenge;
const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
