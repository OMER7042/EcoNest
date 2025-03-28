import { View, FlatList, TouchableOpacity } from "react-native";
import React, {useEffect, useState } from "react";
import RNText from "../../components/RNText";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { Image } from "expo-image";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { POINTS_IMG_URL } from "../../constants/constants";
import { db } from "../../firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

const Rankings = () => {
  const { colors } = useTheme();
  const [leaderboard, setLeaderboard] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(
          usersRef,
          where("isPartOfCommunity", "==", true),
          orderBy("communityPoints", "desc")
        );

        const querySnapshot = await getDocs(q);
        let leaderboard = [];

        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          leaderboard.push({
            id: doc.id,
            name: userData.name || "Anonymous",
            communityPoints: userData.communityPoints || 0,
            profileUrl:
              userData.profileUrl ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          });
        });

        // Ensure top 3 always exist (fill missing slots with empty users)
        while (leaderboard.length < 3) {
          leaderboard.push({
            id: `empty-${leaderboard.length + 1}`,
            name: "Empty Slot",
            communityPoints: 0,
            profileUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          });
        }
        console.log(leaderboard.length);

        // Sort top 3 in (2,1,3) format
        const formattedTopUsers = [
          leaderboard[1],
          leaderboard[0],
          leaderboard[2],
        ];

        // remove the top 3 users from the leaderboard or you can slice the array also if user is in top 3 remove the user from leaderboard
        leaderboard = leaderboard.slice(3);
        setLeaderboard(leaderboard);
        setTopUsers(formattedTopUsers);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <ActivityIndicator
          size={30}
          color={colors.primary}
          style={{ flex: 1 }}
        />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      {/* Top 3 Users Section */}
      <View
        style={{
          marginTop: 20,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 10,
        }}
      >
        {topUsers.map((item, index) => (
          <View
            key={item.id}
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              backgroundColor: index === 1 ? colors.primary : colors.card,
              padding: 8,
              borderRadius: 10,
              gap: 10,
              height: index === 1 ? 140 : 120,
              width: widthPercentageToDP(30),
            }}
          >
            <Image
              source={{ uri: item.profileUrl }}
              style={{
                width: 65,
                height: 65,
                borderRadius: 50,
                top: -30,
                position: "absolute",
                borderWidth: 3,
                borderColor: index === 1 ? colors.gold : colors.primary,
                opacity: item.name === "Empty Slot" ? 0.5 : 1,
              }}
            />
            <Badge
              color={index === 1 ? colors.gold : colors.primary}
              textColor={index === 1 ? colors.black : colors.white}
              text={index === 1 ? "1" : index === 0 ? "2" : "3"}
            />

            <RNText
              style={{
                fontFamily: "M-SemiBold",
                fontSize: 15,
                color: index === 1 ? colors.black : colors.text,
                opacity: item.name === "Empty Slot" ? 0.5 : 1,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </RNText>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Image
                source={POINTS_IMG_URL}
                style={{ height: 30, aspectRatio: 1 }}
              />
              <RNText
                font={"M-Bold"}
                style={{
                  color: index === 1 ? colors.black : colors.text,
                  fontSize: 18,
                  opacity: item.name === "Empty Slot" ? 0.5 : 1,
                }}
              >
                {item.communityPoints}
              </RNText>
            </View>
          </View>
        ))}
      </View>

      {/* Current User Section (If Not in Top 3) */}
      {/* {currentUser && currentUser.name !== "Empty Slot" && (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: colors.card,
            padding: 16,
            borderRadius: 16,
            marginVertical: 8,
            marginHorizontal: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
            <View
              style={{
                backgroundColor: colors.purple,
                padding: 3,
                width: 22,
                height: 22,
                borderRadius: 4,
                alignItems: "center",
                justifyContent: "center",
                transform: [{ rotate: "45deg" }],
              }}
            >
              <RNText
                style={{
                  color: colors.black,
                  fontFamily: "M-Bold",
                  transform: [{ rotate: "-45deg" }],
                  fontSize: 12,
                }}
              >
                {leaderboard.findIndex((u) => u.id === currentUser.id) + 1}
              </RNText>
            </View>
            <Image
              source={{ uri: currentUser.profileUrl }}
              style={{ height: 40, aspectRatio: 1, borderRadius: 50 }}
            />
            <RNText font={"M-Bold"} style={{ color: colors.text, fontSize: 18 }}>
              {currentUser.name}
            </RNText>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Image source={POINTS_IMG_URL} style={{ height: 30, aspectRatio: 1 }} />
            <RNText font={"M-Bold"} style={{ color: colors.text, fontSize: 18 }}>
              {currentUser.communityPoints}
            </RNText>
          </View>
        </TouchableOpacity>
      )} */}

      <FlatList
        data={leaderboard}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 16 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: colors.card,
                padding: 16,
                borderRadius: 16,
                marginVertical: 8,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
              >
                <View
                  style={{
                    backgroundColor: colors.purple,
                    padding: 3,
                    width: 22,
                    height: 22,
                    borderRadius: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    transform: [{ rotate: "45deg" }],
                  }}
                >
                  <RNText
                    style={{
                      color: colors.black,
                      fontFamily: "M-Bold",
                      transform: [{ rotate: "-45deg" }],

                      fontSize: 12,
                    }}
                  >
                    {index + 4}
                  </RNText>
                </View>
                <Image
                  // source={user?.profileUrl}
                  source={
                    "https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  style={{ height: 40, aspectRatio: 1, borderRadius: 50 }}
                />
                <RNText
                  font={"M-Bold"}
                  style={{ color: colors.text, fontSize: 18 }}
                >
                  {item.name}
                </RNText>
              </View>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Image
                  source={POINTS_IMG_URL}
                  style={{ height: 30, aspectRatio: 1 }}
                />
                <RNText
                  font={"M-Bold"}
                  style={{ color: colors.text, fontSize: 18 }}
                >
                  {item.communityPoints}
                </RNText>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Rankings;

const Badge = ({ color, text, textColor }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 3,
        width: 22,
        height: 22,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ rotate: "45deg" }],
        position: "absolute",
        top: 20,
      }}
    >
      <RNText
        style={{
          color: textColor,
          fontFamily: "M-Bold",
          transform: [{ rotate: "-45deg" }],
          fontSize: 12,
        }}
      >
        {text}
      </RNText>
    </View>
  );
};
