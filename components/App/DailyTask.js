import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import StartWithTask from "../StartWithTask";
import { widthPercentageToDP } from "react-native-responsive-screen";
const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
const DailyTask = () => {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: -12,
      }}
    >
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={widthPercentageToDP(100)}
        renderItem={({ item }) => {
          return <StartWithTask item={item} />;
        }}
      />
    </View>
  );
};

export default DailyTask;
