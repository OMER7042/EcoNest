import { Pressable, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Image } from "expo-image";
import { blurhash } from "../constants";
import { useRouter } from "expo-router";
import { AuthContext } from "../context/authcontext";
import LogoImg from "../assets/app/logo.png";
import RNText from "./RNText";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../constants/constants";
import { Chip, useTheme } from "react-native-paper";

const HomeHeader = () => {
  const { user, toggleTheme } = useContext(AuthContext);
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderBottomColor: colors.border,
        borderBottomWidth: 2,
      }}
    >
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Image source={LogoImg} style={{ height: hp(8), aspectRatio: 1 }} />
      </TouchableOpacity>

      {/* <Chip style={{ marginLeft: 10 }} onPress={toggleTheme}>
        Toggle
      </Chip> */}
      <View
        style={{
          borderRadius: 20,
          borderWidth: 2.5,
          borderColor: colors.green,
          padding: 2,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginLeft: "auto",
          marginRight: 10,
        }}
      >
        <RNText font={"M-Bold"} style={{ fontSize: 12, color: colors.text }}>
         {user?.points}
        </RNText>
        <Image
          source={POINTS_IMG_URL}
          style={{ height: 20, aspectRatio: 1, color: "green" }}
        />
      </View>

      <View
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: colors.green,
          padding: 2.5,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginRight: 10,
        }}
      >
        <RNText font={"M-Bold"} style={{ fontSize: 12, color: colors.text }}>
        {user?.saved}
        </RNText>
        <Image source={ECO_IMG_URL} style={{ height: 20, aspectRatio: 1 }} />
      </View>

      <Pressable
        style={{}}
        onPress={() => {
          router.push("/profile");
        }}
      >
        <Image
          style={{
            height: hp(5.5),
            aspectRatio: 1,
            borderRadius: 100,
            backgroundColor: "#0553",
          }}
          source={
            user?.profileUrl
              ? user?.profileUrl
              : "https://cdn3d.iconscout.com/3d/premium/thumb/user-3711728-3105450.png?f=webp"
          }
          placeholder={blurhash}
          transition={500}
        />
      </Pressable>
    </View>
  );
};

export default HomeHeader;
