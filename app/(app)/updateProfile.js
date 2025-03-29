import { View, Pressable, Alert } from "react-native";
import React, { useContext, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";

import { blurhash } from "../../constants";
import CustomKeyboardView from "../../components/CustomKeybordView";
import { useRouter } from "expo-router";
import { AuthContext } from "../../context/authcontext";
import ProfileImage from "../../components/ProflieImage";
import RNText from "../../components/RNText";
import { saveProfileUrl, updateProflie } from "../../constants/api";
import { TextInput, useTheme } from "react-native-paper";
import RNTextInput from "../../components/RNTextInput";
import Loading from "../../components/Loading";

const UpdateProfile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const [updateImage, setUpdateImage] = useState(false);

  const upateProfile = async (url) => {
    await saveProfileUrl(user.id, url);
    setUpdateImage(false);
  };

  const { colors } = useTheme();
  const [name, setName] = useState(user?.name);

  const updateProfile = async () => {
    if (name.length < 3) {
      Alert.alert("Please enter a valid name");
      return;
    }

    if (name === user?.name) {
      Alert.alert("Please enter a new name to update your profile");
      return;
    }
    setLoading(true);
    try {
      const response = await updateProflie(user.id, { name });
      if (response.success) {
        Alert.alert("Profile updated successfully");
        router.back();
      } else {
        Alert.alert("Error updating profile", response.message);
      }
    } catch (error) {
      Alert.alert("Error updating profile", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomKeyboardView>
      <View
        style={{
          flex: 1,
          padding: wp(5),
          backgroundColor: colors.background,
          height: hp(90),
        }}
      >
        {updateImage === false ? (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 14,
              }}
            >
              <Image
                style={{
                  height: hp(20),
                  aspectRatio: 1,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: "#D1D5DB",
                }}
                source={
                  user?.profileUrl
                    ? user?.profileUrl
                    : "https://cdn3d.iconscout.com/3d/premium/thumb/user-3711728-3105450.png?f=webp"
                }
                placeholder={blurhash}
                transition={500}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  borderRadius: 5,
                  width: "50%",
                  backgroundColor: colors.primary,
                }}
                onPress={() => {
                  setUpdateImage(true);
                }}
              >
                <RNText
                  font={"M-Medium"}
                  style={{
                    fontSize: hp(1.8),
                    textAlign: "center",
                    color: "#000",
                    padding: 7,
                    borderRadius: 5,
                  }}
                >
                  Update Image
                </RNText>
              </Pressable>
            </View>
          </>
        ) : (
          <View
            style={{
              minHeight: hp(35),
              paddingBottom: 20,
            }}
          >
            <ProfileImage id={user.id} upateProfile={upateProfile} />
          </View>
        )}

        <View
          style={{
            gap: 16,
            paddingTop: 16,
          }}
        >
          <RNTextInput
            placeholder="Full Name"
            mode="outlined"
            value={name}
            onChangeText={setName}
            outlineStyle={{
              borderWidth: 1,
              borderColor: "#afbfcf",

              borderRadius: 10,
            }}
            left={
              <TextInput.Icon
                icon="account"
                style={{
                  color: colors.text,
                }}
              />
            }
          />
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 20,
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
                backgroundColor: colors.green,
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
              onPress={updateProfile}
            >
              <RNText
                font={"M-Bold"}
                style={{
                  fontSize: hp(2.2),
                  color: colors.background,
                  textAlign: "center",
                  padding: 7,
                }}
              >
                Update Profile
              </RNText>
            </Pressable>
          )}
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default UpdateProfile;
