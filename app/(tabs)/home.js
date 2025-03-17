import React from "react";
import ClimateSolutions from "../../components/App/ClimateSolutions";
import Insights from "../../components/App/Insights";
import EcoProgress from "../../components/App/EcoProgress";
import DailyTask from "../../components/App/DailyTask";
import MinimalLayout from "../../components/Layout/MinimalLayout";

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
