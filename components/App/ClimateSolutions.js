import { View, Text } from "react-native";
import React from "react";
import RNText from "../RNText";
import { FlatList } from "react-native";
import DailyInsights from "./DailyInsights";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Solution from "./Solution";
import { useTheme } from "react-native-paper";

const ClimateSolutions = () => {
  const { colors } = useTheme();
  const solutions = [
    {
      id: 1,
      img: "https://images.ctfassets.net/zr62mq1hhu5q/5EnyhUA8OzJ3tNYOuv794b/aa4ad6b8f9c02c58f34d9f0c5ed9c3a5/nebelwald-panama_34286907974_o.jpeg?fm=jpg&w=1400&h=980&q=85&fit=fill",
      title: "Tree Planting",
      description:
        "Trees effectively absorb CO₂ in the atmosphere and release oxygen back for us to breathe.",
    },
    {
      id: 2,
      img: "https://images.ctfassets.net/zr62mq1hhu5q/4LIRsaVj59Cb04TmnpFUE1/bda3d60dbfea83339589781157a93b05/Birds_eye__sunset_behind_solar_plant.jpg?fm=jpg&w=1400&h=980&q=85&fit=fill",
      title: "Solar Power",
      description:
        "Solar brings clean energy to millions while keeping fossile fuels in the ground.",
    },

    {
      id: 3,
      img: "https://avaada.com/wp-content/uploads/landscape-with-windmills-compressed-1-1-scaled-1-2048x1366.jpg",
      title: "Wind Power",
      description:
        "Wind turbines convert the kinetic energy in the wind into mechanical power.",
    },
    {
      id: 4,
      img: "https://images.theecoexperts.co.uk/wp-content/uploads/2022/08/Hydropower-1.jpeg",
      title: "Hydro Power",
      description:
        "Hydropower is a renewable energy source that uses the power of water to generate electricity.",
    },
    {
      id: 5,
      img: "https://images.ctfassets.net/zr62mq1hhu5q/4iPRHFFS80H3zk0IhLLJNA/ab7e079d4e77f909e450004b2d7ab116/1017_ClimatePartner_06.jpeg?fm=webp&w=1600&h=1000&q=85&fit=fill",
      title: "Clean cookstoves",
      description:
        "Replacing open-fire cooking reudces air pollution, which protects people and the planet.",
    },
    {
      id: 6,
      img: "https://macelectricco.com/wp-content/uploads/2022/09/Mac-Electric-Featured-Image-Template-5.png",
      title: "Electric Vehicles",
      description:
        "Electric vehicles are a cleaner alternative to traditional gas-powered vehicles.",
    },
    {
      id: 7,
      img: "https://climatetransform.com/wp-content/uploads/2021/03/industrial-logging-photo.jpg",
      title: "Deforestation Prevention",
      description:
        "It supports local communities and protects wildlife, while ensuring trees keep standing.",
    },
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
          marginBottom: 20,
          marginLeft: 10,
          fontSize: 20,
          color: colors.text,
        }}
        font={"M-SemiBold"}
      >
        Unbeatable Climate Solutions
      </RNText>

      <FlatList
        data={solutions}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={widthPercentageToDP(70)}
        renderItem={({ item }) => {
          return <Solution item={item} />;
        }}
      />
    </View>
  );
};

export default ClimateSolutions;
