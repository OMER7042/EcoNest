import React, { useState, useEffect, useCallback, useContext } from "react";
import { View, ActivityIndicator, DynamicColorIOS } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useTheme } from "react-native-paper";
import { AuthContext } from "../../context/authcontext";
import RNText from "../../components/RNText";

const DiscussionScreen = () => {

  const { messages, user } = useContext(AuthContext);
  const { colors } = useTheme();

  const renderBubble = (props) => {
  const { currentMessage, previousMessage } = props;
    const isLastMessageByUser =
      !previousMessage || previousMessage.user?._id !== currentMessage.user?._id;

    return (
      <View style={{ marginBottom: 5 }}>
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
              borderWidth: 1,
            },
            left: {
              backgroundColor: colors.card,
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

  const onSend = useCallback(
    async (newMessages = []) => {
      const { _id, text, createdAt, user } = newMessages[0];
    
      await addDoc(collection(db, "communities", "Green Life", "messages"), {
        _id,
        text,
        createdAt,
        user,
      });
    },
    []
  );

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: colors.background,
      }}
    >
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
      />
    </View>
  );
};

export default DiscussionScreen;
