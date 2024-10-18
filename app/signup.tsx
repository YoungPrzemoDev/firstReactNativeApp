import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme, invertTheme } from "@/constants/Themes";
import { Link } from "expo-router";
import {
  ViewStyle,
  StyledText,
  StyledButton,
  ButtonText,
  TopLeftView,
  StyledTextInput,
} from "@/app/style";
import { TextInput } from "react-native-gesture-handler";

const signup = () => {
  const [userName, setUser] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogin = () => {
    console.log("button clicked");
  };

  return (
    <ThemeProvider theme={theme}>
      <ViewStyle>
        <TopLeftView>
          <StyledText>Create New Account</StyledText>
        </TopLeftView>

        <StyledTextInput
          placeholder="Full Name"
          onChangeText={(newText) => setUser(newText)}
          value={userName}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Phone Number"
          secureTextEntry={true}
          onChangeText={(newText) => setPhoneNumber(newText)}
          value={phoneNumber}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="E-mail"
          secureTextEntry={true}
          onChangeText={(newText) => setEmail(newText)}
          value={email}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(newText) => setPass(newText)}
          value={password}
        ></StyledTextInput>
        <StyledButton onPress={handleLogin}>
          <ButtonText>Sign Up</ButtonText>
        </StyledButton>
      </ViewStyle>
    </ThemeProvider>
  );
};

export default signup;
