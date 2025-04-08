import { View, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { router, useGlobalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import RNText from "../../components/RNText";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../../constants/constants";
import { Image } from "expo-image";
import { useTheme } from "react-native-paper";
import { addNewEntry, updateGoalStatus } from "../../constants/api";
import { AuthContext } from "../../context/authcontext";
import Loading from "../../components/Loading";
import MinimalLayout from "../../components/Layout/MinimalLayout";

const Goal = () => {
  const {
    title,
    info,
    img,
    points,
    saved,
    successSubtitle,
    successTitle,
    id,
    status,
  } = useGlobalSearchParams();

  const { colors } = useTheme();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const isDone = status === "true" ? true : false;

  const handleChallenge = async () => {
    if (isDone) {
      router.push({
        pathname: "share",
        params: {
          img,
          points,
          saved,
          successTitle,
          successSubtitle,
          path: "goals",

        },
      });
    } else {
      setLoading(true);
      try {
        await updateGoalStatus(user?.id, id);
        const response = await addNewEntry(user?.id, {
          type: "Goal",
          date: new Date(),
          title,
          img,
          points,
          saved,
          successSubtitle,
          successTitle,
          id,
        });
        if (response.success) {
          router.push({
            pathname: "share",
            params: {
              img,
              points,
              saved,
              successTitle,
              successSubtitle,
              path: "goals",
            },
          });
        } else {
          Alert.alert("Error", response.msg);
        }
      } catch (error) {
        console.error("Error updating user entry:", res.msg);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <MinimalLayout showHeader>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          position: "absolute",
          width: "100%",
          zIndex: 100,
          top: 10,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            padding: 10,
            borderRadius: 10,
            backgroundColor: colors.card,
          }}
          onPress={() => {
            router.back();
          }}
        >
          <AntDesign name="arrowleft" size={24} color={colors.text} />
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: heightPercentageToDP(30),
          position: "relative",
        }}
      >
        <Image source={img} contentFit="contain" style={styles.video} />
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
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 8,
            gap: 10,
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
            padding: 8,
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
              {saved} kg
            </RNText>
            <RNText
              style={{
                color: colors.text,
              }}
            >
              CO₂eq Saved{" "}
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
          backgroundColor: colors.primary,
          borderTopEndRadius: 26,
          borderTopStartRadius: 26,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Loading size={heightPercentageToDP(6.5)} />
          </View>
        ) : (
          <Pressable
            disabled={loading}
            onPress={handleChallenge}
            style={{
              backgroundColor: isDone ? colors.white : colors.card,
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
                color: isDone ? colors.black : colors.opposite,
              }}
              font={"M-SemiBold"}
            >
              {isDone ? "Share Challenge" : "Complete Challenge"}
            </RNText>
          </Pressable>
        )}
      </View>
    </MinimalLayout>
  );
};

export default Goal;
const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
