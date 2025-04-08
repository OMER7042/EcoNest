import { View } from "react-native";
import Colors from "../constants/Colors";
import LogoImg from "../assets/app/logo.png";
import { Image } from "expo-image";
import { widthPercentageToDP } from "react-native-responsive-screen";
import RNText from "../components/RNText";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={LogoImg}
        style={{ width: widthPercentageToDP(70), aspectRatio: 1 }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 24,
        }}
      >
        <RNText
          style={{
            color: Colors.primary,
            textAlign: "center",
            fontSize: 25,
          }}
          font={"M-Medium"}
        >
          crafted by
        </RNText>
        <RNText
          style={{
            color: Colors.primary,
            textAlign: "center",
            fontSize: 20,
          }}
          font={"M-Bold"}
        >
           EcoNest
        </RNText>
      </View>
    </View>
  );
}
