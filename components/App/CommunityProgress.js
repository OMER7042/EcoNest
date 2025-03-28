import React, { useContext, useState } from "react";
import { Alert, Pressable, TouchableOpacity, View } from "react-native";
import RNText from "../RNText";
import CircularProgress from "react-native-circular-progress-indicator";
import Colors from "../../constants/Colors";
import { calculateTreesPlanted } from "../../constants/helpers";
import { Image } from "expo-image";
import { Chip, useTheme } from "react-native-paper";
import Loading from "../Loading";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../../constants/constants";
import { AuthContext } from "../../context/authcontext";
import { router } from "expo-router";
import {
  becomePremiumUser,
  joinCommunity,
  leaveCommunity,
} from "../../constants/api";
import TargetImg from "../../assets/app/target.png";  
const CommunityProgress = () => {
  const { colors } = useTheme();
  const { user, communityStats } = useContext(AuthContext);


  return (
    <View
      style={{
        flex: 1,
        marginTop: 8,
      }}
    >
      <>
        {user?.isPartOfCommunity ? (
          <ProgressBar isMain user={user} communityStats={communityStats} />
        ) : (
          <View
            style={{
              padding: 8,
              marginVertical: 16,
            }}
          >
            <RNText
              font={"M-Medium"}
              style={{
                color: colors.text,
                fontSize: 16,
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              Join a community to track your progress
            </RNText>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: colors.card,
                padding: 16,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    "https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    marginRight: 10,
                  }}
                  contentFit="cover"
                />
                <RNText
                  font={"M-SemiBold"}
                  style={{ color: colors.text, fontSize: 17 }}
                >
                  Green Circle Life
                </RNText>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: user?.premiumSubscription
                      ? colors.green
                      : colors.mediumGray,
                    borderRadius: 5,
                    padding: 2,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    paddingHorizontal: 14,
                    paddingVertical: 5,
                  }}
                  disabled={!user?.premiumSubscription}
                  onPress={() => {
                    Alert.alert(
                      "Green Circle Life",
                      "Are you sure you want to join this community?",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel",
                        },
                        {
                          text: "Join",
                          onPress: () => {
                            joinCommunity(user?.id);
                          },
                        },
                      ]
                    );
                  }}
                >
                  <RNText
                    font={"M-Bold"}
                    style={{
                      fontSize: 14,
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Join
                  </RNText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </>

      {!user?.premiumSubscription && (
        <View
          style={{
            padding: 8,
            backgroundColor: colors.card,
            borderRadius: 16,
            paddingVertical: 16,
            borderWidth: 1.5,
            borderColor: colors.gold,
          }}
        >
          <RNText
            font={"M-Medium"}
            style={{
              color: colors.text,
              fontSize: 18,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Upgrade to premium to join any community
          </RNText>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.gold,
              padding: 16,
              borderRadius: 16,
              borderWidth: 1,
              borderRadius: 16,
              padding: 16,
              marginVertical: 16,
            }}
            onPress={() => {
              Alert.alert(
                "Green Circle Life",
                "Are you sure you want to upgrade to premium?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "Upgrade",
                    onPress: () => {
                      becomePremiumUser(user?.id);
                    },
                  },
                ]
              );
            }}
          >
            <RNText
              font={"M-Bold"}
              style={{ color: colors.black, fontSize: 18 }}
            >
              Try Premium for $0
            </RNText>
          </TouchableOpacity>

          <RNText
            font={"M-Regular"}
            style={{
              color: colors.text,
              fontSize: 14,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            14 days free trial then $2.99/month
          </RNText>
        </View>
      )}
    </View>
  );
};

export default CommunityProgress;

const ProgressBar = ({ isMain, user,communityStats }) => {
  const { colors } = useTheme();
  const [showAllLines, setShowAllLines] = useState(false);

  return (
    <>
      <View
        style={{
          backgroundColor: "#222",
          width: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 26,
          paddingHorizontal: 14,
        }}
      >
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Image
            source={
              "https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            style={{ width: 60, height: 60, marginRight: 10 , borderRadius: 8}}
            contentFit="cover"
          />
          <View>
            <RNText font={"M-Medium"} style={{ color: "#fff", fontSize: 20 }}>
              Green Circle Life
            </RNText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 12,
                  borderRadius: 20,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor:  colors.primary,
                  marginVertical: 5,
                  width: 80,
                  padding: 2,
                }}
              >
               Public 
              </RNText>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 4,

                  justifyContent: "center",
                  alignItems: "center",
                  padding: 3,
                }}
                onPress={() => {
                  Alert.alert(
                    "Green Circle Life",
                    "Are you sure you want to leave this community?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "Leave",
                        onPress: () => {
                          leaveCommunity(user?.id);
                        },
                      },
                    ]
                  );
                }}
              >
                <RNText
                  font={"Poppins-Medium"}
                  style={{ color: Colors.green, fontSize: 16 }}
                >
                  Leave
                </RNText>
                <MaterialIcons name="logout" size={18} color={Colors.green} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {isMain && (
          <View
            style={{
              marginTop: 14,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <RNText
              font={"M-Regular"}
              style={{
                color: "#fff",
                fontSize: 16,
                width: showAllLines ? "auto" : 240,
              }}
              numberOfLines={showAllLines ? 0 : 2}
            >
              Join us in our mission to save the planet, a global movenment
              inspired by the need to save the planet. We are a community of
              like-minded individuals who are passionate about sustainability
              and the environment. Together, we can make a difference. We can
              create a better future for our children and the planet.{" "}
              <RNText
                font={"M-Bold"}
                style={{
                  color: Colors.green,
                  textDecorationLine: "underline",
                  marginLeft: 5,
                  fontSize: 14,
                }}
                onPress={() => setShowAllLines(!showAllLines)}
              >
                See Less
              </RNText>
            </RNText>
            {!showAllLines && (
              <RNText
                font={"M-Bold"}
                style={{
                  color: Colors.green,
                  textDecorationLine: "underline",
                  marginLeft: 5,
                  fontSize: 14,
                }}
                onPress={() => setShowAllLines(!showAllLines)}
              >
                See More
              </RNText>
            )}
          </View>
        )}
        <View
          style={{
            marginTop: 20,
          }}
        >
          <CircularProgress
            value={communityStats?.savedCO2 || 0}
            radius={90}
            progressValueColor={"#ecf0f1"}
            maxValue={1512}
            title={"kg CO₂eq"}
            titleColor={"white"}
            titleStyle={{
              fontFamily: "M-Bold",
              fontSize: 18,
            }}
            subtitleStyle={{
              fontFamily: "M-Regular",
              fontSize: 15,
            }}
            subtitle="Total Savings"
            progressFormatter={(value) => {
              "worklet";

              return value?.toFixed(1); // 2 decimal places
            }}
          />
        </View>
        <RNText
          font={"M-Regular"}
          style={{
            color: "#fff",
            fontSize: 15,
            textAlign: "center",
            marginVertical: 16,
          }}
        >
          Yay! Your CO₂ savings are equal what
          <RNText font={"M-Bold"} style={{ color: Colors.green }}>
            {" "}
            {calculateTreesPlanted(communityStats?.savedCO2)}{" "}
          </RNText>
          trees fix in a year.
        </RNText>
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: Colors.green,
          borderRadius: 26,
          marginTop: -50,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <RNText
          font={"M-Regular"}
          style={{
            color: "#000",
            fontSize: 16,
            textAlign: "center",
            marginTop: 65,
          }}
        >
          <RNText font={"M-Bold"} style={{ color: "#000" }}>
            Target : Save
          </RNText>{" "}
          6,000 kg CO₂eq
        </RNText>
      </View>

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
              {user?.communityPoints}
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
            backgroundColor: colors.card,
          }}
        >
          <Image source={TargetImg} style={{ height: 30, aspectRatio: 1 }} />
          <View>
            <RNText
              style={{
                fontSize: 18,
                fontFamily: "M-Bold",
                color: Colors.green,
              }}
            >
              {communityStats?.actionsCount}
            </RNText>
            <RNText
              style={{
                color: colors.text,
              }}
            >
             Actions Completed
            </RNText>
          </View>
        </View>
      </View>

      <RNText
        font={"M-Bold"}
        style={{
          color: colors.text,
          fontSize: 16,
          marginVertical: 16,
          marginLeft: 5,
        }}
      >
        View Leaderboard
      </RNText>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: colors.card,
          padding: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.green,
          borderRadius: 16,
          padding: 16,
        }}
        onPress={() => {
          router.navigate("rankings");
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={user?.profileUrl}
            style={{ height: 40, aspectRatio: 1 }}
          />
          <RNText font={"M-Bold"} style={{ color: colors.text, fontSize: 18 }}>
            {user?.name}
          </RNText>
        </View>
        {/* <Chip
          style={{
            backgroundColor: colors.green,
          }}
          compact
          textStyle={{
            fontFamily: "M-Bold",
            fontSize: 14,
            letterSpacing: 1,
          }}
        >
          #1
        </Chip> */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Image
            source={POINTS_IMG_URL}
            style={{ height: 30, aspectRatio: 1 }}
          />
          <RNText font={"M-Bold"} style={{ color: colors.text, fontSize: 18 }}>
            {user?.communityPoints}
          </RNText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.green,
          padding: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.green,
          borderRadius: 16,
          padding: 16,
          marginVertical: 16,
        }}
        onPress={() => {
          router.navigate("chat");
        }}
      >
        <RNText font={"M-Bold"} style={{ color: colors.white, fontSize: 18 }}>
          Engage with the community
        </RNText>
      </TouchableOpacity>
      <RNText
        font={"M-Regular"}
        style={{
          color: colors.text,
          fontSize: 16,
          marginHorizontal: 16,
          marginBottom: 16,
        }}
      >
        Connect, engate and share insights with the community
      </RNText>
    </>
  );
};
