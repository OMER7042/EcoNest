import {
  View,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { router, useGlobalSearchParams } from "expo-router";
import Colors from "../../constants/Colors";
import { Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import RNText from "../../components/RNText";
import { calculateTreesPlanted } from "../../constants/helpers";
import { Chip, Divider, SegmentedButtons, TextInput } from "react-native-paper";
import { FlatList } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import {
  CO2_EMISSION_FACTOR,
  ENERGY_DATA,
  FOOD_DATA,
  REMEDIATION_DATA,
  TRAVEL_DATA,
  WASTE_DATA,
} from "../../constants/constants";
import RNTextInput from "../../components/RNTextInput";
import Slider from "@react-native-community/slider";

import Loading from "../../components/Loading";
const ios = Platform.OS === "ios";

const Action = () => {
  const { top } = useSafeAreaInsets();
  const { title, subtitle } = useGlobalSearchParams();
  const [savedCO2, setSavedCO2] = useState(0);
  const [loading, setLoading] = useState(false);

  // Travel
  const [firstTravel, setFirstTravel] = useState(1);
  const [secondTravel, setSecondTravel] = useState(1);
  const [distance, setDistance] = useState(50);

  //Energy
  const [energyType, setEnergyType] = useState("hvac");

  const [selectedEnergy, setSelectedEnergy] = useState(1);
  const [hours, setHours] = useState(1);

  // Food
  const [foodType, setFoodType] = useState(1);

  const [weight, setWeight] = useState(1);

  // Waste
  const [wasteType, setWasteType] = useState(1);

  const [wasteWeight, setWasteWeight] = useState(1);

  // Remediation
  const [remediationType, setRemediationType] = useState(1);

  const [remediationCount, setRemediationCount] = useState(1);

  const calculateCO2Savings = () => {
    switch (title) {
      case "Travel":
        return calculateTravelCO2(firstTravel, secondTravel, distance);
      case "Energy":
        return calculateEnergySavings(selectedEnergy, hours);
      case "Food":
        return calculateFoodEmissionReduction(foodType, weight);
      case "Waste":
        return calculateWasteEmissionReduction(wasteType, wasteWeight);
      case "Remediation":
        return calculateRemediationCO2(remediationType, remediationCount);
      default:
        return 0;
    }
  };
  const isDisabled = calculateCO2Savings() <= 0;
  function calculateTravelCO2(travelledBy, insteadOf, km) {
    if (travelledBy === insteadOf) return 0;
    if (km <= 0) return 0;
    const savedCO2 =
      (TRAVEL_DATA[insteadOf - 1].emission -
        TRAVEL_DATA[travelledBy - 1].emission) *
      km;
    return savedCO2.toFixed(2);
  }

  function calculateEnergySavings(title, hours) {
    const savedEnergy = ENERGY_DATA[title - 1].emission * hours;
    const savedCO2 = savedEnergy * CO2_EMISSION_FACTOR;
    return savedCO2.toFixed(2);
  }
  function calculateFoodEmissionReduction(food, quantityKg) {
    const co2Saved = FOOD_DATA[food - 1].emission * quantityKg;
    return co2Saved.toFixed(2);
  }
  function calculateWasteEmissionReduction(waste, quantityKg) {
    const co2Saved = WASTE_DATA[waste - 1].emission * quantityKg;
    return co2Saved.toFixed(2);
  }

  function calculateRemediationCO2(remediation, count) {
    const co2Saved = REMEDIATION_DATA[remediation - 1].emission * count;
    return co2Saved.toFixed(2);
  }
  const render = () => {
    switch (title) {
      case "Travel":
        return (
          <>
            <View
              style={{
                backgroundColor: "#111",
                borderRadius: 26,
                marginTop: 10,
                zIndex: 999,
                padding: 20,
                gap: 10,
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{ color: Colors.purple, fontSize: 18 }}
              >
                I travelled by
                <RNText font={"M-Bold"} style={{ color: Colors.green }}>
                  {" "}
                  {TRAVEL_DATA[firstTravel - 1].title}
                </RNText>
              </RNText>

              <ReusableList
                data={TRAVEL_DATA}
                selected={firstTravel}
                setSelected={setFirstTravel}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <RNText
                  font={"M-Medium"}
                  style={{ color: Colors.white, fontSize: 16 }}
                >
                  Distance travelled
                </RNText>
                <TextInput
                  value={distance}
                  keyboardType="numeric"
                  onChangeText={setDistance}
                  style={{
                    width: "40%",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                  textColor="#fff"
                  dense
                  maxLength={4}
                  right={
                    <TextInput.Affix text="KM" textStyle={{ color: "#fff" }} />
                  }
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#111",
                borderRadius: 26,
                marginTop: 20,
                zIndex: 999,
                padding: 20,
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{ color: Colors.purple, fontSize: 18 }}
              >
                Instead of
                <RNText font={"M-Bold"} style={{ color: Colors.green }}>
                  {" "}
                  {TRAVEL_DATA[secondTravel - 1].title}
                </RNText>
              </RNText>
              <ReusableList
                data={TRAVEL_DATA}
                selected={secondTravel}
                setSelected={setSecondTravel}
              />
            </View>
          </>
        );
      case "Energy":
        return (
          <View
            style={{
              backgroundColor: "#111",
              borderRadius: 26,
              marginTop: 10,
              zIndex: 999,
              padding: 20,
              gap: 10,
            }}
          >
            <SegmentedButtons
              value={energyType}
              onValueChange={setEnergyType}
              //change background color and text colo
              density="small"
              buttons={[
                {
                  value: "hvac",
                  label: "HVAC",
                  style: {
                    //red color
                    backgroundColor:
                      energyType === "hvac" ? Colors.green : "transparent",
                  },
                  labelStyle: {
                    color: energyType === "hvac" ? "#111" : "#fff",
                    fontFamily: "U-Bold",
                  },
                },
                {
                  value: "lighting",
                  label: "Lighting",
                  style: {
                    backgroundColor:
                      energyType === "lighting" ? Colors.green : "transparent",
                  },
                  labelStyle: {
                    color: energyType === "lighting" ? "#111" : "#fff",
                    fontFamily: "U-Bold",
                  },
                },
                {
                  value: "appliances",
                  label: "Appliances",
                  style: {
                    backgroundColor:
                      energyType === "appliances"
                        ? Colors.green
                        : "transparent",
                  },
                  labelStyle: {
                    color: energyType === "appliances" ? "#111" : "#fff",
                    fontFamily: "U-Bold",
                  },
                },
              ]}
            />
            <View style={{ marginTop: 10 }} />

            <ReusableList
              data={ENERGY_DATA.filter((item) => item.type === energyType)}
              selected={selectedEnergy}
              setSelected={setSelectedEnergy}
            />

            <View
              style={{
                backgroundColor: "#111",
                padding: 12,
                borderRadius: 4,
                marginVertical: 20,
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{
                  color: Colors.white,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                {ENERGY_DATA[selectedEnergy - 1]?.info}
              </RNText>
            </View>

            <View
              style={{
                marginTop: 20,
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{ color: Colors.white, fontSize: 16 }}
              >
                Hours
              </RNText>
              <Chip
                compact
                mode="outlined"
                style={{
                  borderRadius: 20,
                  backgroundColor: "#000",
                  borderColor: "#fff",
                  borderWidth: 1.5,
                }}
              >
                <RNText font={"M-Bold"} style={{ color: "#fff" }}>
                  {hours} hours
                </RNText>
              </Chip>
            </View>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={1}
              maximumValue={100}
              onValueChange={setHours}
              step={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        );
      case "Food":
        return (
          <View
            style={{
              backgroundColor: "#111",
              borderRadius: 26,
              marginTop: 10,
              zIndex: 999,
              padding: 20,
              gap: 10,
            }}
          >
            <RNText
              font={"M-Medium"}
              style={{ color: Colors.purple, fontSize: 18 }}
            >
              High Emission Food
            </RNText>

            <ReusableList
              data={FOOD_DATA}
              selected={foodType}
              setSelected={setFoodType}
            />
            <View
              style={{
                backgroundColor: "#000",
                padding: 12,
                borderRadius: 4,
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{
                  color: Colors.white,
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Reduced consumption
              </RNText>
            </View>
            <View
              style={{
                marginTop: 20,
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{ color: Colors.white, fontSize: 16 }}
              >
                Weight
              </RNText>
              <Chip
                compact
                mode="outlined"
                style={{
                  borderRadius: 20,
                  backgroundColor: "#000",
                  borderColor: "#fff",
                  borderWidth: 1.5,
                }}
              >
                <RNText font={"M-Bold"} style={{ color: "#fff" }}>
                  {weight} kg
                </RNText>
              </Chip>
            </View>

            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={1}
              maximumValue={100}
              onValueChange={setWeight}
              step={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        );
      case "Waste":
        return (
          <View
            style={{
              backgroundColor: "#111",
              borderRadius: 26,
              marginTop: 10,
              zIndex: 999,
              padding: 20,
              gap: 10,
            }}
          >
            <ReusableList
              data={WASTE_DATA}
              selected={wasteType}
              setSelected={setWasteType}
            />
            <View
              style={{
                backgroundColor: "#000",
                padding: 12,
                borderRadius: 4,
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{
                  color: Colors.white,
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Composted
              </RNText>
            </View>
            <View
              style={{
                marginTop: 20,
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{ color: Colors.white, fontSize: 16 }}
              >
                Weight
              </RNText>
              <Chip
                compact
                mode="outlined"
                style={{
                  borderRadius: 20,
                  backgroundColor: "#000",
                  borderColor: "#fff",
                  borderWidth: 1.5,
                }}
              >
                <RNText font={"M-Bold"} style={{ color: "#fff" }}>
                  {wasteWeight} kg
                </RNText>
              </Chip>
            </View>

            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={1}
              maximumValue={100}
              onValueChange={setWasteWeight}
              step={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        );
      case "Remediation":
        return (
          <View
            style={{
              backgroundColor: "#111",
              borderRadius: 26,
              marginTop: 10,
              zIndex: 999,
              padding: 20,
              gap: 10,
            }}
          >
            <ReusableList
              data={REMEDIATION_DATA}
              selected={remediationType}
              setSelected={setRemediationType}
            />

            <View
              style={{
                marginTop: 20,
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <RNText
                font={"M-Medium"}
                style={{ color: Colors.white, fontSize: 16 }}
              >
                {REMEDIATION_DATA[remediationType - 1].info}
              </RNText>
              <Chip
                compact
                mode="outlined"
                style={{
                  borderRadius: 20,
                  backgroundColor: "#000",
                  borderColor: "#fff",
                  borderWidth: 1.5,
                }}
              >
                <RNText font={"M-Bold"} style={{ color: "#fff" }}>
                  {remediationCount} {REMEDIATION_DATA[remediationType - 1].sub}
                </RNText>
              </Chip>
            </View>

            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={1}
              maximumValue={100}
              onValueChange={setRemediationCount}
              step={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        );
      default:
        return null;
    }
  };

  const handleLogAction = () => {
    router.back();
  };
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          borderBottomColor: Colors.lightGray,
          position: "absolute",
          width: "100%",
          zIndex: 100,
          top: top,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Pressable
          onPress={() => {
            router.push("/home");
          }}
          style={{
            marginLeft: "auto",
            marginRight: 10,
            borderRadius: 20,
          }}
        >
          <Entypo name="home" size={24} color={Colors.green} />
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: heightPercentageToDP(28),
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RNText font={"M-Medium"} style={{ fontSize: 20, color: "#fff" }}>
            You saved
          </RNText>
          <RNText
            font={"M-Bold"}
            style={{
              fontSize: 24,
              color: Colors.primary,
            }}
          >
            {calculateCO2Savings()} kg CO₂eq
          </RNText>
          <Divider
            style={{
              width: "70%",
              backgroundColor: "#fff",
              marginVertical: 4,
              height: 1,
            }}
          />

          <RNText
            font={"M-Regular"}
            style={{
              fontSize: 17,
              color: "#fff",
              textAlign: "center",
            }}
          >
            {subtitle}
          </RNText>
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          contentFit="cover"
          style={styles.video}
        />
      </View>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: "#000",
        }}
      >
        {render()}
      </ScrollView>

      <View
        style={{
          marginVertical: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isDisabled && (
          <RNText font={"M-Medium"} style={{ color: Colors.red, fontSize: 16 }}>
            This action is not sustainable.
          </RNText>
        )}

        {loading ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Loading size={heightPercentageToDP(6.5)} />
          </View>
        ) : (
          <Pressable
            style={[
              {
                width: widthPercentageToDP(40),
                alignSelf: "center",
                marginTop: 10,
                borderWidth: 2,
                borderColor: Colors.green,
                borderRadius: 20,
                paddingHorizontal: 10,
                padding: 8,
              },
              isDisabled && {
                backgroundColor: Colors.gray,
                borderColor: Colors.gray,
              },
            ]}
            onPress={handleLogAction}
          >
            <RNText
              font={"M-Bold"}
              style={[
                {
                  color: Colors.green,
                  fontSize: 14,
                  textAlign: "center",
                },
                isDisabled && { color: Colors.black },
              ]}
            >
              Log Action
            </RNText>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Action;
const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
const ReusableList = ({ data, selected, setSelected }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <Item item={item} selected={selected} setSelected={setSelected} />
        );
      }}
    />
  );
};
const Item = ({ item, selected, setSelected }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 12,
        overflow: "hidden",
      }}
      onPress={() => {
        setSelected(item.id);
      }}
    >
      <Image
        source={{ uri: item.img }}
        style={[
          {
            width: 100,
            aspectRatio: 1,
            borderRadius: 20,
            opacity: 0.8,
            // cover the image
          },
          selected === item.id && {
            borderWidth: 3,
            borderColor: Colors.green,
            opacity: 1,
          },
        ]}
        contentFit="cover"
      />
      <RNText
        font={selected === item.id ? "M-Bold" : "M-Medium"}
        style={{
          fontSize: 16,
          textAlign: "center",
          marginTop: 10,
          color: selected === item.id ? Colors.green : "#fff",
        }}
      >
        {item.title}
      </RNText>
    </TouchableOpacity>
  );
};
