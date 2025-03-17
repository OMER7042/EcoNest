import { View } from "react-native";
import React from "react";
import RNText from "../RNText";
import { FlatList } from "react-native";
import DailyInsights from "./DailyInsights";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Insights = () => {
  const mostPopular = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
      url:'4b8x4rKiAhE'
    },
    {
      id: 4,
      url:'KdiA12KeSL0'
    },
    {
      id: 5,
      url:'8q7_aV8eLUE'
    },
    {
      id: 6,
      url:'z7yDjWqAW2w'
    },
    {
      id: 7,
      url:'NBW8f4N0ALw'
    }
  ];
  return (
    <View 
      style={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <RNText
        style={{
          marginTop: 20,
          marginBottom: 10,
          marginLeft: 10,
          fontSize: 20,
        }}
        font={"M-SemiBold"}
      >
      EcoSmart Tips & Guides ♻️
      </RNText>

      <FlatList
        data={mostPopular}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <DailyInsights item={item} />;
        }}
      />
    </View>
  );
};

export default Insights;
