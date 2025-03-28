import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { router, useLocalSearchParams } from "expo-router";
import { Divider, useTheme } from "react-native-paper";
import RNText from "../../components/RNText";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../../constants/constants";
import { Image } from "expo-image";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Share = () => {
  const { img, points, saved, successTitle, successSubtitle } =
    useLocalSearchParams();
  const { colors } = useTheme();

  const viewRef = useRef();

  const captureAndShare = async () => {
    try {
      // Request media library permissions
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission required to save images!");
        return;
      }

      // Capture the component as an image
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 0.8,
      });

      // Save to media library
      const asset = await MediaLibrary.createAssetAsync(uri);

      // Share the saved image
      await Sharing.shareAsync(asset.uri, {
        dialogTitle: "Share your achievement!",
        mimeType: "image/png",
      });

      console.log("Image saved & shared:", asset.uri);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,

        backgroundColor: colors.background,
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          position: "absolute",
            top: 50,
            right: 20,
            padding: 10,
            borderRadius: 10,
            backgroundColor: colors.card,
            
        }}
        onPress={() => {
          router.push("/home");
        }}
      >
        <Entypo name="home" size={24} color={colors.text} />
      </Pressable>
      <View
        ref={viewRef}
        collapsable={false}
        style={{
          backgroundColor: colors.card,
          padding: 20,
          borderRadius: 10,

          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          source={img}
          style={{
            height: 120,
            aspectRatio: 1,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
        <RNText
          style={{ fontSize: 36, color: colors.text, textAlign: "center" }}
          font={"M-SemiBold"}
        >
          {successTitle}
        </RNText>
        <Divider
          style={{
            width: "100%",
            marginVertical: 10,
            height: 1,
          }}
        />
        <RNText
          font={"M-Regular"}
          style={{
            fontSize: 18,
            color: colors.text,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          {successSubtitle}
        </RNText>

        <View
          style={{
            marginTop: 16,
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
                  color: colors.green,
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
              padding: 4,
              borderRadius: 8,
            }}
          >
            <Image
              source={ECO_IMG_URL}
              style={{ height: 30, aspectRatio: 1 }}
            />
            <View>
              <RNText
                style={{
                  fontSize: 18,
                  fontFamily: "M-Bold",
                  color: colors.green,
                }}
              >
                {saved} kg CO₂
              </RNText>
              <RNText
                style={{
                  color: colors.text,
                }}
              >
                Saved Emmisions
              </RNText>
            </View>
          </View>
        </View>
      </View>

      {/* Share Button */}
      <TouchableOpacity
        onPress={captureAndShare}
        style={{
          marginTop: 20,
          backgroundColor: colors.green,
          padding: 10,
          borderRadius: 5,
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="sharealt" size={24} color={colors.background} />
        <RNText
          style={{ color: colors.background, marginLeft: 10, fontSize: 18 }}
          font={"M-Bold"}
        >
          Share
        </RNText>
      </TouchableOpacity>
    </View>
  );
};

export default Share;
