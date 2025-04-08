import { View, Text } from "react-native";
import React, { useContext } from "react";
import MinimalLayout from "../../components/Layout/MinimalLayout";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useTheme } from "react-native-paper";
import { AuthContext } from "../../context/authcontext";
import { Image } from "expo-image";
import RNText from "../../components/RNText";
import { POINTS_IMG_URL } from "../../constants/constants";
import { widthPercentageToDP } from "react-native-responsive-screen";
import dayjs from "dayjs";

const History = () => {
  const { colors } = useTheme();
  const { user } = useContext(AuthContext);
  console.log(user?.actions);

  return (
    <MinimalLayout>
      {user?.actions.map((action, idx) => (
        <TouchableOpacity
          key={idx}
          style={{
            backgroundColor: colors.card,
            borderRadius: 20,
            padding: 10,
            margin: 10,
            flexDirection: "row",
          }}
          onPress={() => {
            router.push({
              pathname: "share",
              params: {
                img: action.img,
                points: action.points,
                saved: action.saved,
                successTitle: action.successTitle,
                successSubtitle: action.successSubtitle,
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
            style={{
              flex: 1,
              padding: 10,
              gap: 8,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RNText
              style={{
                fontSize: 14,
                color: colors.text,
              }}
              font={"M-Medium"}
              numberOfLines={2}
            >
              {action.title}
            </RNText>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: colors.green,
                  paddingHorizontal: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <RNText
                  font={"Poppins-Bold"}
                  style={{ fontSize: 12, color: colors.text, marginTop: 2.5 }}
                >
                  {action.points}
                </RNText>
                <Image
                  source={POINTS_IMG_URL}
                  style={{ height: 14, aspectRatio: 1 }}
                />
              </View>

              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: colors.green,
                  backgroundColor: colors.green,
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

            <RNText
              style={{
                fontSize: 13,
                color: colors.purple,
                marginTop: 2.5,
              }}
              font={"M-Bold"}
              numberOfLines={2}
            >
              {/* Date and time */}
              {dayjs(action.createdAt).format("DD/MM/YYYY HH:mm")}
            </RNText>
          </View>
        </TouchableOpacity>
      ))}
    </MinimalLayout>
  );
};

export default History;
