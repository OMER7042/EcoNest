import React from "react";
import ClimateSolutions from "../../components/App/ClimateSolutions";
import Insights from "../../components/App/Insights";
import EcoProgress from "../../components/App/EcoProgress";
import DailyTask from "../../components/App/DailyTask";
import MinimalLayout from "../../components/Layout/MinimalLayout";
import { Button } from "react-native-paper";
import { router } from "expo-router";

const Home = () => {
  return (
    <MinimalLayout showHeader>
      <DailyTask />
      <EcoProgress />
      <Insights />
      <ClimateSolutions />
    </MinimalLayout>
  );
};

export default Home;
