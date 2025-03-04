import React, { useContext, useState } from "react";
import { View, Pressable, Alert, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/authcontext";
import { useRouter } from "expo-router";
import CustomKeyboardView from "../../components/CustomKeybordView";
import RNText from "../../components/RNText";
import { Image } from "expo-image";
import LogoImg from "../../assets/app/logo.png";
import RNTextInput from "../../components/RNTextInput";
import Colors from "../../constants/Colors";
import { Icon, Snackbar, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SignUp = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [hidePassword, setHidePassword] = useState(true);
  const [visible, setVisible] = useState("");

  const handleSignup = async () => {
    if (email === "" || password === "" || name === "") {
      setVisible("All fields are required");
      return;
    }

    setLoading(true);

    let response = await register(email, password, name);

    setLoading(false);
    if (!response.success) {
      setVisible(response.msg);
    }
  };
  const onDismissSnackBar = () => setVisible("");

  return (
    <CustomKeyboardView>
  
      <View
        style={{
          paddingTop: hp(6),
          paddingHorizontal: wp(5),
          flex: 1,
          gap: 8,
          height: hp(95),
        }}
      >
        <View
          style={{
            gap: 16,
            paddingTop: hp(10),
          }}
        >
          <RNText
            font={"M-SemiBold"}
            style={{
              fontSize: 31.5,
              lineHeight: 35,
              marginTop: 14,
            }}
          >
            Create an Account
          </RNText>

          <RNTextInput
            placeholder="Name"
            mode="outlined"
            value={name}
            onChangeText={setName}
            outlineStyle={{
              borderWidth: 1,
              borderColor: "#afbfcf",

              borderRadius: 10,
            }}
            left={<TextInput.Icon icon="account" />}
          />
          <RNTextInput
            placeholder="Email address"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            outlineStyle={{
              borderWidth: 1,
              borderColor: "#afbfcf",

              borderRadius: 10,
            }}
            left={<TextInput.Icon icon="email" />}
          />
        

          <View
            style={{
              position: "relative",
            }}
          >
            <RNTextInput
              placeholder="Password"
              mode="outlined"
              secureTextEntry={hidePassword ? true : false}
              value={password}
              onChangeText={setPassword}
              outlineStyle={{
                borderWidth: 1,
                borderColor: "#afbfcf",

                borderRadius: 10,
              }}
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon={hidePassword ? "eye" : "eye-off"}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              }
            />

            <View
              style={{
                marginTop: 16,
              }}
            >
              <RNText
                style={{ color: "#6B7280", textAlign: "center" }}
                font={"M-Medium"}
              >
                By creating an account, you agree to EcoNest{" "}
                <RNText style={{ color: Colors.blue }} font={"M-Medium"}>
                  Terms of Service{" "}
                </RNText>
                <RNText style={{ color: "#6B7280" }} font={"M-Medium"}>
                  and{" "}
                </RNText>
                <RNText style={{ color: Colors.blue }} font={"M-Medium"}>
                  Privacy Policy
                </RNText>
              </RNText>
            </View>
          </View>
        </View>
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
                backgroundColor: Colors.green,
                borderRadius: 5,
                padding: 7,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              onPress={handleSignup}
            >
              <RNText
                font={"M-Bold"}
                style={{
                  fontSize: hp(2.2),
                  color: "#fff",
                  textAlign: "center",
                  padding: 7,
                }}
              >
                Next
              </RNText>
            </Pressable>
          )}
        </View>
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          left: hp(2),
          top: wp(16),
          backgroundColor: Colors.lightGray,
          borderRadius: 50,
          padding: 5,
        }}
        onPress={() => {
          router.push("/signin");
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <Snackbar
        visible={visible !== ""}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Okay",
        }}
      >
        {visible}
      </Snackbar>
    </CustomKeyboardView>
  );
};

export default SignUp;
