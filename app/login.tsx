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

const login = () => {
  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const [passwordRepeat, setPassRepeat] = useState("");

  const handleLogin = () => {
    console.log("button clicked");
    if (password !== passwordRepeat) {
      Alert.alert("Passwords must match");
    } else {
      Alert.alert("Wszystko git");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ViewStyle>
        <TopLeftView>
          <StyledText>Sign in</StyledText>
        </TopLeftView>

        <StyledTextInput
          placeholder="User Name"
          onChangeText={(newText) => setUser(newText)}
          value={user}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(newText) => setPass(newText)}
          value={password}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Repeat password"
          secureTextEntry={true}
          onChangeText={(newText) => setPassRepeat(newText)}
          value={passwordRepeat}
        ></StyledTextInput>
        <StyledButton onPress={handleLogin}>
          <ButtonText>Confirm</ButtonText>
        </StyledButton>
      </ViewStyle>
    </ThemeProvider>
  );
};

export default login;
