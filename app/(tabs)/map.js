import { View, Platform, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../../components/HomeHeader";
import ClimateSolutions from "../../components/App/ClimateSolutions";
import Insights from "../../components/App/Insights";
import EcoProgress from "../../components/App/EcoProgress";
import DailyTask from "../../components/App/DailyTask";
const ios = Platform.OS === "ios";

const Home = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: ios ? top : top + 10,
        paddingHorizontal: 10,
        flex: 1,
        paddingBottom: 20,
      }}
    >
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DailyTask/>
        <EcoProgress />
        <Insights />
        <ClimateSolutions />
      </ScrollView>
    </View>
  );
};

export default Home;
