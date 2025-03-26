import React from "react";
import RNText from "../../components/RNText";
import MinimalLayout from "../../components/Layout/MinimalLayout";
import { Divider, List, useTheme } from "react-native-paper";
import { Image } from "expo-image";
import LogoImg from "../../assets/app/logo.png";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { router } from "expo-router";
const Actions = () => {
  const {colors} = useTheme();
  const actions = [
    {
      title: "Travel",
      subtitle:"by using lower emission vechicles",
      successTitle:"You are driving change!",
      successSubtitle:"Every journey counts. Your action toady makes you a true planet hero on the go!",
      image:
        "https://www.indianflavours.es/web/image/product.product/3433/image_1024/TRANSPORT%20COST?unique=3c0eff6",

    },
    {
      title: "Energy",
      subtitle:"by reducing energy consumption",
      successTitle:"Keep up this energy!",
      successSubtitle:"Your enery-saving action today makes you a champion of change!",
      image:
        "https://static.vecteezy.com/system/resources/previews/005/427/309/non_2x/alternative-energy-sources-concept-planet-earth-in-human-hands-with-wind-turbines-and-solar-panels-hand-drawing-isolated-on-white-background-illustration-renewable-green-energy-save-the-planet-vector.jpg",
    },
    {
      title: "Food",
      subtitle:"by reducing consumption of high emission foods",
      successTitle:"Food for tought",
      successSubtitle:"You are what you eat!. Your action today will makes you a planet saver",
      image:
        "https://previews.123rf.com/images/magone/magone1709/magone170900029/85933237-breakfast-vegan-plate-for-healthy-eating-isolated-on-white-background-top-view.jpg",
    },
    {
      title: "Waste",
      subtitle:"by reduce, reuse and recycle of waste",
      image: "https://m.media-amazon.com/images/I/81xVGwKdeoL.jpg",
      successTitle:"Waste not, want not!",
      successSubtitle:"Your efforts in reducing waste are clearing the path to a cleaner planet!",
    },
    {
      title: "Remediation",
      subtitle:"by planting trees and cleaning up the environment",
      image: "https://thumbs.dreamstime.com/b/tree-white-background-no6-14621137.jpg",
      successTitle:"You are on the right track!",
      successSubtitle:"Your efforts in planting trees are helping the planet breathe easy!",
    },
  ];
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
        {actions.map((action) => (
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
                  image: action.image,
                  subtitle: action.subtitle
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
