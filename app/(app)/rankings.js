import { View, Text } from "react-native";
import React from "react";
import RNText from "../../components/RNText";
import { Chip, useTheme } from "react-native-paper";
import { Image } from "expo-image";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../../constants/constants";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Rankings = () => {
  const { colors } = useTheme();

  const data = [
    {
      id: 2,
      name: "Shaw",
      points: 3,
      top: false,
    },
    {
      id: 1,
      name: "John",
      points: 4,
      top: true,
    },
    {
      id: 3,
      name: "Susan",
      points: 2,
      top: false,
    },
  ];

  const users = [
    {
      id: 4,
      name: "Doe",
      points: 1,
      top: false,
    },
    {
      id: 5,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 6,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 7,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 8,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 9,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 10,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 11,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 12,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 13,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 14,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 15,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 16,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 17,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 18,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 19,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 20,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 21,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 22,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 23,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 24,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 25,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 26,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 27,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 28,
      name: "Doe",
      points: 0,
      top: false,
    },
    {
      id: 29,
      name: "Jane",
      points: 0,
      top: false,
    },
    {
      id: 30,
      name: "Doe",
      points: 0,
      top: false,
    },
  ];
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
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
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              backgroundColor: item?.top ? colors.primary : colors.card,
              padding: 8,
              borderRadius: 10,
              gap: 10,
              height: item?.top ? 140 : 120,
              width: widthPercentageToDP(30),
            }}
          >
            <Image
              source={
                "https://i.pinimg.com/75x75_RS/ca/16/ea/ca16ea9db2a0687f32802d93ae939b17.jpg"
              }
              style={{
                width: 65,
                height: 65,
                borderRadius: 50,
                top: -30,
                position: "absolute",
                borderWidth: 3,

                borderColor: item?.top ? colors.gold : colors.primary,
              }}
            ></Image>
            <Badge
              color={item?.top ? colors.gold : colors.primary}
              textColor={item?.top ? colors.black : colors.white}
              text={item.id}
            />

            <RNText
              style={{
                fontFamily: "M-SemiBold",
                fontSize: 15,
                color: item?.top ? colors.black : colors.text,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item?.name}
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
                  color: item?.top ? colors.black : colors.text,
                  fontSize: 18,
                }}
              >
                {item?.points}
              </RNText>
            </View>
          </View>
        ))}
      </View>
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
              1
            </RNText>
          </View>
          <Image
            // source={user?.profileUrl}
            source={
              "https://legacytree.world/wp-content/uploads/2019/02/community-shared-tree-sponsorship.jpg"
            }
            style={{ height: 40, aspectRatio: 1, borderRadius: 50 }}
          />
          <RNText font={"M-Bold"} style={{ color: colors.text, fontSize: 18 }}>
            name
          </RNText>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Image
            source={POINTS_IMG_URL}
            style={{ height: 30, aspectRatio: 1 }}
          />
          <RNText font={"M-Bold"} style={{ color: colors.text, fontSize: 18 }}>
            4
          </RNText>
        </View>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => {
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
                    {item.id}
                  </RNText>
                </View>
                <Image
                  // source={user?.profileUrl}
                  source={
                    "https://legacytree.world/wp-content/uploads/2019/02/community-shared-tree-sponsorship.jpg"
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
                  4
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
