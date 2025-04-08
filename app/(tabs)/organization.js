import { View } from "react-native";
import React, { useState } from "react";
import CommunityProgress from "../../components/App/CommunityProgress";
import SearchBar from "../../components/SearchBar";
import { useTheme } from "react-native-paper";
import MinimalLayout from "../../components/Layout/MinimalLayout";

const Organization = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const { colors } = useTheme();
  return (
    <MinimalLayout>
    
      <CommunityProgress />
    </MinimalLayout>
  );
};

export default Organization;
