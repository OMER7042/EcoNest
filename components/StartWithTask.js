import { Pressable, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet } from "react-native";
import { Divider, useTheme } from "react-native-paper";
import RNText from "./RNText";
import { Image } from "expo-image";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../constants/constants";
import Colors from "../constants/Colors";
import Loading from "./Loading";
import { AuthContext } from "../context/authcontext";
import { addNewEntry, getTodayDate } from "../constants/api";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
const tasks = [
  {
    id: 1,
    title: "Use Natural Light During the Day, Switch Off at Night",
    img: "https://miro.medium.com/v2/resize:fit:1400/0*HJ9Rz9MCPJSjy_Id",
    points: 2,
    saved: 0.5,
    successTitle: "Bright idea!",
    successSubtitle:
      "Your energy-saving action today is lighting the way to a greener future!",
  },
  {
    id: 2,
    title: "Turn Off Electronics When Not in Use",
    img: "https://taraenergy.com/wp-content/uploads/2022/04/energy-vampires-electronics-examples-in-home.jpg",
    points: 3,
    saved: 1.2,
    successTitle: "Power down!",
    successSubtitle:
      "Your action to unplug electronics is a step toward a more sustainable future!",
  },
  {
    id: 3,
    title: "Unplug Chargers & Devices When Fully Charged",
    img: "https://www.sempersolaris.com/wp-content/uploads/does-unplugging-save-electric.jpg",
    points: 2,
    saved: 0.7,
    successTitle: "Fully charged!",
    successSubtitle:
      "Your action to unplug chargers is a small step with a big impact on energy conservation!",
  },
  {
    id: 4,
    title: "Opt for a Shorter Shower (Under 5 Minutes)",
    img: "https://www.insidehook.com/wp-content/uploads/2020/08/hero-14.jpg?fit=1200%2C800",
    points: 4,
    saved: 2.0,
    successTitle: "Shower power!",
    successSubtitle:
      "Your choice to take shorter showers is a refreshing step toward water conservation and sustainability!",
  },
  {
    id: 5,
    title: "Carry a Reusable Water Bottle Instead of Buying Plastic",
    img: "https://cdn.shopify.com/s/files/1/0551/8009/9722/files/my-borosil-stainless-steel-bottles-500ml-bliss-bottle-red-500-ml-32973736050826_53d0fa21-6e14-4123-a3c3-78bb631e974a_480x480.jpg?v=1716544560",
    points: 3,
    saved: 0.8,
    successTitle: "Thirsty for change!",
    successSubtitle:
      "Your choice to use a reusable bottle is a refreshing step toward a cleaner planet!",
  },
  {
    id: 6,
    title: "Use Public Transport, Walk, or Bike Instead of Driving",
    img: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b03c4292e7a246109ce6b1f8465ff482.jpg",
    points: 5,
    saved: 3.5,
    successTitle: "On the right track!",
    successSubtitle:
      "Your choice to use alternative transportation is a step toward cleaner air and a healthier planet!",
  },
  {
    id: 7,
    title: "Skip Meat for a Day (Try a Plant-Based Meal)",
    img: "https://eu-images.contentstack.com/v3/assets/bltcc046473819c9a19/blt4f2e410cabe53695/648590643837df9076d8c7bf/GettyImages-Meat.jpeg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
    points: 5,
    saved: 4.0,
    successTitle: "Plant power!",
    successSubtitle:
      "Your choice to enjoy a plant-based meal is a delicious step toward a more sustainable diet!",
  },
  {
    id: 8,
    title: "Avoid Single-Use Plastics (Use Cloth Bags & Metal Straws)",
    img: "https://img.freepik.com/free-photo/back-view-man-carrying-tote-bag_53876-96623.jpg",
    points: 3,
    saved: 1.5,
    successTitle: "Plastic-free hero!",
    successSubtitle:
      "Your choice to avoid single-use plastics is a step toward a cleaner environment and a healthier future!",
  },
  {
    id: 9,
    title: "Recycle Properly (Sort Waste Before Disposing)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/NEA_recycling_bins%2C_Orchard_Road.JPG/1200px-NEA_recycling_bins%2C_Orchard_Road.JPG",
    points: 4,
    saved: 2.2,
    successTitle: "Recycling champion!",
    successSubtitle:
      "Your commitment to proper recycling is a valuable contribution to a more sustainable future!",
  },
  {
    id: 10,
    title: "Air-Dry Clothes Instead of Using a Dryer",
    img: "https://st.depositphotos.com/1063346/1364/i/450/depositphotos_13643724-stock-photo-primary-colored-t-shirts.jpg",
    points: 4,
    saved: 2.8,
    successTitle: "Hang in there!",
    successSubtitle:
      "Your choice to air-dry clothes is a step toward a more sustainable lifestyle and a greener planet!",
  },
  {
    id: 11,
    title: "Use a Reusable Coffee Cup Instead of Disposable Ones",
    img: "https://ca.keepcup.com/media/wysiwyg/SEO_block/keepcup-04797.jpg-1.jpg",
    points: 3,
    saved: 1.0,
    successTitle: "Cup of change!",
    successSubtitle:
      "Your choice to use a reusable coffee cup is a small action with a big impact on waste reduction and sustainability!",
  },
  {
    id: 12,
    title: "Compost Food Scraps Instead of Throwing Them Away",
    img: "https://5.imimg.com/data5/YA/XW/NB/SELLER-54332421/city-compost-500x500.jpg",
    points: 5,
    saved: 3.0,
    successTitle: "Compost king/queen!",
    successSubtitle:
      "Your choice to compost food scraps is a valuable contribution to a healthier planet and a more sustainable future!",
  },
  {
    id: 13,
    title: "Reduce Water Waste by Fixing Leaky Taps",
    img: "https://guide-images.cdn.ifixit.com/igi/AYks5jBprcWL3WOc.medium",
    points: 4,
    saved: 2.5,
    successTitle: "Drip, drip, hooray!",
    successSubtitle:
      "Your action to fix leaky taps is a drop in the bucket toward water conservation and a greener future!",
  },
  {
    id: 14,
    title: "Buy Local & Seasonal Produce to Reduce Carbon Miles",
    img: "https://c8.alamy.com/comp/J7JRTD/fresh-fruits-and-vegetables-on-sale-at-the-curb-market-a-local-farmers-J7JRTD.jpg",
    points: 4,
    saved: 2.0,
    successTitle: "Locally sourced hero!",
    successSubtitle:
      "Your choice to buy local and seasonal produce is a step toward a more sustainable diet and a healthier planet!",
  },
  {
    id: 15,
    title: "Use Eco-Friendly Cleaning Products",
    img: "https://res.cloudinary.com/drt2tlz1j/images/f_auto,q_auto/v1690263898/fn1/eco-friendly-cleaning-products/eco-friendly-cleaning-products.png?_i=AA",
    points: 3,
    saved: 1.2,
    successTitle: "Clean and green!",
    successSubtitle:
      "Your choice to use eco-friendly cleaning products is a step toward a healthier home and a cleaner environment!",
  },
  {
    id: 16,
    title: "Switch to LED Bulbs Instead of Incandescent Lights",
    img: "https://www.cnet.com/a/img/resize/003a554263f356dbb3d79d9419c1bdf818fdc559/hub/2024/05/31/280e0c0b-2151-4d1e-9a1f-e075b74c3b43/gettyimages-1335431687.jpg?auto=webp&fit=crop&height=675&width=1200",
    points: 4,
    saved: 2.8,
    successTitle: "Bright idea!",
    successSubtitle:
      "Your choice to switch to LED bulbs is a bright step toward energy efficiency and a greener future!",
  },
  {
    id: 17,
    title: "Donate or Repurpose Old Clothes Instead of Throwing Them",
    img: "https://reviewed-com-res.cloudinary.com/image/fetch/s--tbEM39Xr--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1502826298000/clothingdonations.jpg",
    points: 4,
    saved: 2.5,
    successTitle: "Fashion forward!",
    successSubtitle:
      "Your choice to donate or repurpose old clothes is a stylish step toward waste reduction and a more sustainable lifestyle!",
  },
  {
    id: 18,
    title: "Set Your Thermostat 1-2 Degrees Lower in Winter/Higher in Summer",
    img: "https://www.bhg.com/thmb/EZmUZLHCokJja-VfMNJY6DRKfag=/5454x0/filters:no_upscale():strip_icc()/GettyImages-1426586489-a3fbffad873e473ea70c6f0ebd4da757.jpg",
    points: 5,
    saved: 3.2,
    successTitle: "Cool (or warm) change!",
    successSubtitle:
      "Your choice to adjust the thermostat is a step toward energy efficiency and a more sustainable home!",
  },
  {
    id: 19,
    title: "Use a Bamboo Toothbrush Instead of Plastic",
    img: "https://m.media-amazon.com/images/I/71edeKpYPpL.jpg",
    points: 3,
    saved: 1.0,
    successTitle: "Brush up on sustainability!",
    successSubtitle:
      "Your choice to use a bamboo toothbrush is a small action with a big impact on waste reduction and sustainability!",
  },
];
const StartWithTask = ({ item }) => {
  const { user } = useContext(AuthContext);
  const ID = item.id;
  const { colors } = useTheme();

  const getDailyTask = () => {
    const today = new Date().getDate(); // Get day of the month (1-31)
    const taskIndex = today % tasks.length; // Ensure it cycles through available tasks
    return tasks[taskIndex];
  };
  const dailyTask = getDailyTask();
  const taskDone = user?.dailyTask === getTodayDate();
  const [loading, setLoading] = useState(false);
  const handleTaskDone = async () => {
    setLoading(true);
    try {
      const response = await addNewEntry(user?.id, {
        type: "Daily Task",
        date: new Date(),
        ...dailyTask,
      });

      if (response.success) {
        router.push({
          pathname: "share",
          params: {
            ...dailyTask,
          },
        });
      } else {
        Alert.alert("Error", response.msg);
      }
    } catch (error) {
      console.error("Error updating user entry:", res.msg);
    } finally {
      setLoading(false);
    }
  };

  if (ID === 1) {
    return (
      <View
        style={{
          height: 190,
          width: wp(94),
          borderRadius: 30,
          overflow: "hidden",
          position: "relative",
          marginRight: 10,
        }}
      >
        {/* <VideoView
          style={styles.video}
          player={player}
          nativeControls={false}
          resizeMode="contain"
        /> */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          contentFit="cover"
          style={styles.video}
        />
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 14,
          }}
        >
          <RNText
            font={"M-Bold"}
            style={{
              fontSize: 22,
              color: "#fff",
              textAlign: "center",
              marginTop: 24,
            }}
          >
            Let's Start With Action 🏆
          </RNText>
          <RNText
            font={"M-Medium"}
            style={{
              fontSize: 16,
              color: "#fff",
              textAlign: "center",
              marginTop: 12,
            }}
          >
            Swipe For Today's Task 👉🏻
          </RNText>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: wp(90),
          flexDirection: "row",
          borderRadius: 30,
          overflow: "hidden",
          position: "relative",
          height: taskDone ? 200 : 150,
        }}
      >
        <Image
          source={{ uri: dailyTask.img }}
          contentFit="fill"
          style={styles.video}
        />

        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {taskDone ? (
            <>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 10,
                  right: 14,

                  backgroundColor: "#fff",
                  borderRadius: 100,
                  padding: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                }}
                onPress={() => {
                  router.push({
                    pathname: "share",
                    params: {
                      ...dailyTask,
                    },
                  });
                }}
              >
                <AntDesign name="sharealt" size={22} color={colors.black} />
              </TouchableOpacity>
              <RNText
                font={"M-SemiBold"}
                style={{
                  fontSize: 21,
                  marginTop: 20,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Amazing! You have finished today's task!
              </RNText>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: wp(80),
                  height: hp(8),
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 8,
                      borderWidth: 1.5,
                      borderColor: "#fff",
                      backgroundColor: "#000",
                      padding: 2.5,
                      paddingHorizontal: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      marginLeft: "auto",
                    }}
                  >
                    <RNText
                      font={"M-Bold"}
                      style={{ fontSize: hp(1.4), color: "#fff" }}
                    >
                      ECO Points Earned
                    </RNText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                    }}
                  >
                    <RNText
                      font={"M-Bold"}
                      style={{ fontSize: hp(3), color: "#fff", marginRight: 6 }}
                    >
                      {dailyTask.points}
                    </RNText>
                    <Image
                      source={POINTS_IMG_URL}
                      style={{ height: 26, aspectRatio: 1 }}
                    />
                  </View>
                </View>
                <Divider
                  style={{
                    height: "100%",
                    width: 1,
                    backgroundColor: "#fff",
                    marginHorizontal: 10,
                  }}
                />
                <View
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 8,
                      borderWidth: 1.5,
                      borderColor: "#fff",
                      backgroundColor: "#000",
                      padding: 2.5,
                      paddingHorizontal: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      marginLeft: "auto",
                    }}
                  >
                    <RNText
                      font={"M-Bold"}
                      style={{ fontSize: hp(1.4), color: "#fff" }}
                    >
                      kg CO₂ Saved
                    </RNText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                    }}
                  >
                    <RNText
                      font={"M-Bold"}
                      style={{ fontSize: hp(3), color: "#fff", marginRight: 6 }}
                    >
                      {dailyTask.saved}
                    </RNText>
                    <Image
                      source={ECO_IMG_URL}
                      style={{ height: 32, aspectRatio: 1 }}
                    />
                  </View>
                </View>
              </View>
            </>
          ) : (
            <>
              <RNText
                font={"M-Bold"}
                style={{
                  fontSize: 18,
                  marginTop: 16,
                  color: "#fff",
                  textAlign: "center",
                  paddingHorizontal: 5,
                }}
              >
                {dailyTask.title}
              </RNText>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 8,
                    borderWidth: 1.5,
                    borderColor: Colors.green,
                    padding: 2.5,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    marginLeft: "auto",
                  }}
                >
                  <RNText
                    font={"M-Bold"}
                    style={{ fontSize: 15, color: "#fff", marginRight: 6 }}
                  >
                    {dailyTask.points}
                  </RNText>
                  <Image
                    source={POINTS_IMG_URL}
                    style={{ height: 18, aspectRatio: 1 }}
                  />
                </View>

                <View
                  style={{
                    borderRadius: 8,
                    backgroundColor: Colors.green,
                    padding: 2.5,
                    paddingHorizontal: 10,
                  }}
                >
                  <RNText
                    font={"M-Bold"}
                    style={{ fontSize: 16, color: "#fff" }}
                  >
                    {dailyTask.saved} kg CO₂
                  </RNText>
                </View>
              </View>
            </>
          )}
        </View>
      </View>

      {!taskDone && (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {loading ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Loading size={hp(6.5)} />
            </View>
          ) : (
            <Pressable
              style={{
                width: wp(40),
                alignSelf: "center",
                marginTop: 10,
                borderWidth: 2,
                borderColor: Colors.green,
                borderRadius: 20,
                paddingHorizontal: 10,
                padding: 6,
              }}
              onPress={handleTaskDone}
            >
              <RNText
                font={"M-Bold"}
                style={{
                  color: Colors.green,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                Log Action 🚀
              </RNText>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default StartWithTask;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
