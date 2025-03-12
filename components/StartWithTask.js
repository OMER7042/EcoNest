import { Pressable, View } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import RNText from "./RNText";
import { Image } from "expo-image";
import { ECO_IMG_URL, POINTS_IMG_URL } from "../constants/constants";
import Colors from "../constants/Colors";
import Loading from "./Loading";

const StartWithTask = ({ item }) => {
  const ID = item.id;
  const videoSource =
    "https://static.vecteezy.com/system/resources/previews/001/622/142/mp4/aerial-view-wide-shot-point-of-view-mountain-with-lush-trees-and-foggy-clouds-free-video.mp4";

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const tasks = [
    {
      id: 1,
      title: "Use Natural Light During the Day, Switch Off at Night",
      img: "https://miro.medium.com/v2/resize:fit:1400/0*HJ9Rz9MCPJSjy_Id",
      points: 2,
      footprint: 0.5,
    },
    {
      id: 2,
      title: "Turn Off Electronics When Not in Use",
      img: "https://taraenergy.com/wp-content/uploads/2022/04/energy-vampires-electronics-examples-in-home.jpg",
      points: 3,
      footprint: 1.2,
    },
    {
      id: 3,
      title: "Unplug Chargers & Devices When Fully Charged",
      img: "https://www.sempersolaris.com/wp-content/uploads/does-unplugging-save-electric.jpg",
      points: 2,
      footprint: 0.7,
    },
    {
      id: 4,
      title: "Opt for a Shorter Shower (Under 5 Minutes)",
      img: "https://www.insidehook.com/wp-content/uploads/2020/08/hero-14.jpg?fit=1200%2C800",
      points: 4,
      footprint: 2.0,
    },
    {
      id: 5,
      title: "Carry a Reusable Water Bottle Instead of Buying Plastic",
      img: "https://cdn.shopify.com/s/files/1/0551/8009/9722/files/my-borosil-stainless-steel-bottles-500ml-bliss-bottle-red-500-ml-32973736050826_53d0fa21-6e14-4123-a3c3-78bb631e974a_480x480.jpg?v=1716544560",
      points: 3,
      footprint: 0.8,
    },
    {
      id: 6,
      title: "Use Public Transport, Walk, or Bike Instead of Driving",
      img: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b03c4292e7a246109ce6b1f8465ff482.jpg",
      points: 5,
      footprint: 3.5,
    },
    {
      id: 7,
      title: "Skip Meat for a Day (Try a Plant-Based Meal)",
      img: "https://eu-images.contentstack.com/v3/assets/bltcc046473819c9a19/blt4f2e410cabe53695/648590643837df9076d8c7bf/GettyImages-Meat.jpeg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
      points: 5,
      footprint: 4.0,
    },
    {
      id: 8,
      title: "Avoid Single-Use Plastics (Use Cloth Bags & Metal Straws)",
      img: "https://img.freepik.com/free-photo/back-view-man-carrying-tote-bag_53876-96623.jpg",
      points: 3,
      footprint: 1.5,
    },
    {
      id: 9,
      title: "Recycle Properly (Sort Waste Before Disposing)",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/NEA_recycling_bins%2C_Orchard_Road.JPG/1200px-NEA_recycling_bins%2C_Orchard_Road.JPG",
      points: 4,
      footprint: 2.2,
    },
    {
      id: 10,
      title: "Air-Dry Clothes Instead of Using a Dryer",
      img: "https://st.depositphotos.com/1063346/1364/i/450/depositphotos_13643724-stock-photo-primary-colored-t-shirts.jpg",
      points: 4,
      footprint: 2.8,
    },
    {
      id: 11,
      title: "Use a Reusable Coffee Cup Instead of Disposable Ones",
      img: "https://ca.keepcup.com/media/wysiwyg/SEO_block/keepcup-04797.jpg-1.jpg",
      points: 3,
      footprint: 1.0,
    },
    {
      id: 12,
      title: "Compost Food Scraps Instead of Throwing Them Away",
      img: "https://5.imimg.com/data5/YA/XW/NB/SELLER-54332421/city-compost-500x500.jpg",
      points: 5,
      footprint: 3.0,
    },
    {
      id: 13,
      title: "Reduce Water Waste by Fixing Leaky Taps",
      img: "https://guide-images.cdn.ifixit.com/igi/AYks5jBprcWL3WOc.medium",
      points: 4,
      footprint: 2.5,
    },
    {
      id: 14,
      title: "Buy Local & Seasonal Produce to Reduce Carbon Miles",
      img: "https://c8.alamy.com/comp/J7JRTD/fresh-fruits-and-vegetables-on-sale-at-the-curb-market-a-local-farmers-J7JRTD.jpg",
      points: 4,
      footprint: 2.0,
    },
    {
      id: 15,
      title: "Use Eco-Friendly Cleaning Products",
      img: "https://res.cloudinary.com/drt2tlz1j/images/f_auto,q_auto/v1690263898/fn1/eco-friendly-cleaning-products/eco-friendly-cleaning-products.png?_i=AA",
      points: 3,
      footprint: 1.2,
    },
    {
      id: 16,
      title: "Switch to LED Bulbs Instead of Incandescent Lights",
      img: "https://www.cnet.com/a/img/resize/003a554263f356dbb3d79d9419c1bdf818fdc559/hub/2024/05/31/280e0c0b-2151-4d1e-9a1f-e075b74c3b43/gettyimages-1335431687.jpg?auto=webp&fit=crop&height=675&width=1200",
      points: 4,
      footprint: 2.8,
    },
    {
      id: 17,
      title: "Donate or Repurpose Old Clothes Instead of Throwing Them",
      img: "https://reviewed-com-res.cloudinary.com/image/fetch/s--tbEM39Xr--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1502826298000/clothingdonations.jpg",
      points: 4,
      footprint: 2.5,
    },
    {
      id: 18,
      title: "Set Your Thermostat 1-2 Degrees Lower in Winter/Higher in Summer",
      img: "https://www.bhg.com/thmb/EZmUZLHCokJja-VfMNJY6DRKfag=/5454x0/filters:no_upscale():strip_icc()/GettyImages-1426586489-a3fbffad873e473ea70c6f0ebd4da757.jpg",
      points: 5,
      footprint: 3.2,
    },
    {
      id: 19,
      title: "Use a Bamboo Toothbrush Instead of Plastic",
      img: "https://m.media-amazon.com/images/I/71edeKpYPpL.jpg",
      points: 3,
      footprint: 1.0,
    },
  ];
  const getDailyTask = () => {
    const today = new Date().getDate(); // Get day of the month (1-31)
    const taskIndex = today % tasks.length; // Ensure it cycles through available tasks
    return tasks[taskIndex];
  };
  const dailyTask = getDailyTask();

  const [taskDone, settaskDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleTaskDone = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      settaskDone(true);
    }, 3000);
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
                      source={
                        "https://cdn-icons-png.flaticon.com/512/6839/6839114.png"
                      }
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
                      kg CO2 Saved
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
                      {dailyTask.footprint}
                    </RNText>
                    <Image
                      source={
                        "http://cdn-icons-png.flaticon.com/512/3779/3779288.png"
                      }
                      style={{ height: 20, aspectRatio: 1 }}
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
                    {dailyTask.footprint} kg CO2
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
