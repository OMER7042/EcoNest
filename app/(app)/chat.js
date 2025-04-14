import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  View,
  ActivityIndicator,
  DynamicColorIOS,
  TouchableOpacity,
} from "react-native";
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
} from "react-native-gifted-chat";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { Modal, Portal, useTheme } from "react-native-paper";
import { AuthContext } from "../../context/authcontext";
import RNText from "../../components/RNText";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import RNTextInput from "../../components/RNTextInput";
import { heightPercentageToDP } from "react-native-responsive-screen";

const DiscussionScreen = () => {
  const { messages, user } = useContext(AuthContext);
  const { colors } = useTheme();

  const [loading, setLoading] = useState(false);

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const renderBubble = (props) => {
    const { currentMessage, previousMessage } = props;
    const isLastMessageByUser =
      !previousMessage ||
      previousMessage.user?._id !== currentMessage.user?._id;

    return (
      <View >
        {isLastMessageByUser && currentMessage.user._id !== user?.id && (
          <RNText
            font={"M-Medium"}
            style={{
              color: colors.text,
              fontSize: 12,
              marginBottom: 2,
              marginLeft: 5,
            }}
          >
            {currentMessage.user.name}
          </RNText>
        )}
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              //if its image message, set the background color to white
              backgroundColor:
                currentMessage?.image || currentMessage?.video
                  ? colors.background
                  : colors.purple,
              // if image message, set the border color to white
              borderColor:
                currentMessage?.image || currentMessage?.video
                  ? colors.white
                  : colors.purple,
              borderWidth: 1,
            },
            left: {
              backgroundColor:
                currentMessage?.image || currentMessage?.video
                  ? colors.background
                  : colors.card,
              // if image message, set the border color to white
              borderColor:
                currentMessage?.image || currentMessage?.video
                  ? colors.white
                  : colors.card,
              borderWidth: 1,
            },
          }}
          textStyle={{
            right: {
              color: "#fff",
              fontFamily: "M-Regular",
            },
            left: {
              color: "#fff",
              fontFamily: "M-Regular",
            },
          }}
          timeTextStyle={{
            right: {
              color: "#fff",
            },
            left: {
              color: "#fff",
            },
          }}
        />
      </View>
    );
  };

  const renderMessageImage = (props) => {
    const { currentMessage } = props;
  
    return (
      <Image
        source={{ uri: currentMessage.image }}
        style={{
          width: 200, // or '100%' if inside a container
          height: 200,
          borderRadius: 10,
          resizeMode: 'cover',
          margin: 5
        }}
      />
    );
  };
  const onSend = useCallback(async (newMessages = []) => {
    const { _id, text, createdAt, user } = newMessages[0];

    await addDoc(collection(db, "communities", "Green Life", "messages"), {
      _id,
      text,
      createdAt,
      user,
    });
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialIcons
            name="send"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: colors.card, // 🔥 Background color for dark theme
          borderTopColor: colors.background, // Darker border color
          color: colors.text,
        }}
        primaryStyle={{ alignItems: "center" }}
        textInputStyle={{
          color: colors.text,
          fontFamily: "M-Medium",
        }}
      />
    );
  };

  const pickImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        // const imageUrl = await uploadImageAsync(imageUri);
        setImage(imageUri); // Set the image URL in state
        // await sendImageMessage(imageUrl);
      }
    } catch (error) {
      console.error("Error picking image: ", error);
    }
  };

  const sendImageMessage = async (imageUrl) => {
    const newMessage = {
      _id: Date.now().toString(), // Unique ID
      createdAt: new Date(),
      user: {
        _id: user?.id,
        name: user?.username,
      },
      image: imageUrl, // GiftedChat will render this
      text: caption, // Caption text
    };
    await addDoc(
      collection(db, "communities", "Green Life", "messages"),
      newMessage
    );
  };

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: colors.background,
      }}
    >
      {image !== null && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backgroundColor: colors.background,
          }}
        >
          <View
            style={{
              backgroundColor: colors.card,
              width: "90%",
              borderRadius: 16,
              padding: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 8,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setImage(null);
                setCaption("");
              }}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 10,
                padding: 6,
                backgroundColor: "rgba(0,0,0,0.4)",
                borderRadius: 20,
              }}
            >
              <MaterialIcons name="close" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Image Preview */}
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                aspectRatio: 1,
                borderRadius: 12,
                marginBottom: 16,
              }}
              contentFit="contain"
              transition={500}
            />

            {/* Caption Input */}
            <RNTextInput
              font={"M-Medium"}
              placeholder="Write a caption..."
              style={{
                backgroundColor: colors.background,
                borderRadius: 10,
                paddingHorizontal: 14,
                paddingVertical: 10,
                fontSize: 16,
                color: colors.text,
              }}
              onChangeText={setCaption}
              multiline={true}
              numberOfLines={3}
              maxLength={100}
              value={caption}
            />

            <TouchableOpacity
              disabled={loading}
              onPress={async () => {
                if (image) {
                  setLoading(true);

                  const imageUrl = await uploadImageAsync(image);
                  await sendImageMessage(imageUrl);
                  setLoading(false);
                }
                setImage(null);
                setCaption("");
              }}
              style={{
                backgroundColor: colors.purple,
                padding: 12,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 16,
              }}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <RNText
                  font={"M-Medium"}
                  style={{
                    color: "#fff",
                    fontSize: 16,
                  }}
                >
                  Send
                </RNText>
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}

      <GiftedChat
        messages={messages}
        onSend={(newMessage) => onSend(newMessage)}
        user={{
          _id: user?.id,
          name: user?.username,
        }}
        inverted={false}
        renderBubble={renderBubble}
        alwaysShowSend
        scrollToBottom
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
        
        
        renderActions={() => (
          <TouchableOpacity onPress={pickImage} style={{ marginLeft: 10 }}>
            <Image
              style={{
                width: 30,
                aspectRatio: 1,
                borderRadius: 4,
              }}
              source={
                "https://cdn3d.iconscout.com/3d/premium/thumb/gallery-3d-icon-download-in-png-blend-fbx-gltf-file-formats--picture-art-image-user-interface-pack-icons-8511782.png?f=webp"
              }
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DiscussionScreen;

async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileRef = ref(storage, `images/${Date.now()}`);
  const result = await uploadBytes(fileRef, blob);

  blob.close();

  return await getDownloadURL(fileRef);
}
