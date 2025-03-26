import React from "react";
import MinimalLayout from "../../components/Layout/MinimalLayout";
import RNText from "../../components/RNText";
import { List, useTheme } from "react-native-paper";
import { Image } from "expo-image";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {  TouchableOpacity, View } from "react-native";
import {  POINTS_IMG_URL, TASKS } from "../../constants/constants";
import { router  } from "expo-router";

import Colors from "../../constants/Colors";

const Challenges = () => {
  const { colors } = useTheme();
  return (
    <MinimalLayout showHeader>
      <View
        style={{
          padding: 10,
          borderRadius: 20,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={
            "https://woliba.io/wp-content/uploads/2024/03/Mind-Body-Wellness-Tips-1.png"
          }
          style={{
            width: "100%",
            height: 220,
            borderRadius: 20,
          }}
          contentFit="cover"
        />
      </View>
      <View style={{color:colors.text, padding: 10, gap: 5 }}>
        <RNText font={"Poppins-Bold"} style={{color:colors.text, fontSize: 20 }}>
          ECONest - Climate Champion Challenges
        </RNText>
        <RNText font={"Poppins-Regular"} style={{color:colors.text, fontSize: 16 }}>
          Tick off these sustainable tasks to earn points and reduce your carbon
          footprint.
        </RNText>
        <RNText font={"Poppins-Regular"} style={{color:colors.text, fontSize: 16 }}>
          Take action to reduce your carbon footprint and earn points!
        </RNText>

        <RNText font={"Poppins-Bold"} style={{color:colors.text, fontSize: 18 }}>
          Let's do this!{" "}
        </RNText>
        <RNText font={"Poppins-Regular"} style={{color:colors.text, fontSize: 16 }}>
          The First Step to chaning the world is changing yourself.{" "}
        </RNText>
        <RNText font={"Poppins-Regular"} style={{color:colors.text, fontSize: 16 }}>
          Start with a action today, and make a difference.{" "}
        </RNText>
      </View>
      <RNText
        font={"Poppins-Bold"}
        style={{color:colors.text, fontSize: 18, marginLeft: 10, marginTop: 10 }}
      >
        Tasks
      </RNText>
      {TASKS.map((action) => (
        <TouchableOpacity
          key={action.id}
          style={{
            backgroundColor: colors.card,
            borderRadius: 20,
            padding: 10,
            margin: 10,
            flexDirection: "row",
          }}
          onPress={() => {
            router.push({
              pathname: "challenge",
              params: {
                title: action.title,
                img: action.img,
                points: action.points,
                saved: action.saved,
                info: action.info,
              },
            });
          }}
        >
          <Image
            source={action.img}
            style={{
              width: widthPercentageToDP(30),
              aspectRatio: 1,
              borderRadius: 20,
            }}
            contentFit="cover"
          />
          <View
            style={{ flex: 1, padding: 10, justifyContent: "space-between" }}
          >
            <RNText
              style={{
                fontSize: 16,
                color: colors.text,
              }}
              font={"Poppins-SemiBold"}
            >
              {action.title}
            </RNText>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2.5,
                  borderColor: Colors.green,
                  padding: 3,
                  paddingHorizontal: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <RNText font={"Poppins-Bold"} style={{ fontSize: 14, color: colors.text,marginTop: 2.5 }}>
                  {action.points}
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
                  borderColor: Colors.green,
                  backgroundColor: Colors.green,
                  padding: 2.5,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <RNText font={"Poppins-SemiBold"} style={{ fontSize: 12 }}>
                  {action.saved} kg CO₂eq
                </RNText>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </MinimalLayout>
  );
};

export default Challenges;
