import React from "react";
import RNText from "../../components/RNText";
import MinimalLayout from "../../components/Layout/MinimalLayout";
import { Divider, List, useTheme } from "react-native-paper";
import { Image } from "expo-image";
import LogoImg from "../../assets/app/logo.png";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { router } from "expo-router";
import { ACTIONS } from "../../constants/constants";
const Actions = () => {
  const {colors} = useTheme();

  return (
    <MinimalLayout showHeader>
      <RNText style={{ fontSize: 22, padding: 10, color: colors.text }} font={"M-Bold"}>
        {/* Choose a catogory to take action on [emoji] */}
        Choose a catogory to take your next action!
      </RNText>
      <List.Section
        style={{
          gap: 10,
        }}
      >
        {ACTIONS.map((action) => (
          <List.Item
            key={action.title}
            title={action.title}
            style={{
              backgroundColor: colors.card,
              borderRadius: 20,
              padding: 10,
            }}
            onPress={() => {
              router.push({
                pathname: "action",
                params: {
                  title: action.title,
                  subtitle: action.subtitle,
                  id: action.id,
                },
              });
            }}
            titleStyle={{ fontSize: 20, fontFamily: "M-Bold" }}
            left={() => (
              <Image
                source={action.image}
                style={{
                  width: widthPercentageToDP(30),
                  aspectRatio: 1,
                  borderRadius: 20,
                  // cover the image
                }}
                contentFit="contain"
              />
            )}
            // on the right add arrow icon

            right={() => <List.Icon color={colors.text} icon="chevron-right" />}
          />
        ))}
      </List.Section>
    </MinimalLayout>
  );
};

export default Actions;
