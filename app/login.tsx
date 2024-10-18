import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme, invertTheme } from "@/constants/Themes";
import { styled } from "styled-components/native";
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

const StyledNormalText = styled.Text`
  margin-top: 30px;
  font-size: larger;
  margin-bottom: 10px;
`;

const login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <ViewStyle>
        <TopLeftView>
          <StyledText>Sign In</StyledText>
        </TopLeftView>
        <StyledTextInput
          placeholder="E-mail or phone number"
          onChangeText={(newText) => setLogin(newText)}
          value={login}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Password"
          onChangeText={(newText) => setPassword(newText)}
          value={password}
        ></StyledTextInput>
        <StyledButton>
          <ButtonText>Log In</ButtonText>
        </StyledButton>
        <StyledNormalText>OR</StyledNormalText>
        <StyledButton>
          <ButtonText>Log In With Facebook</ButtonText>
        </StyledButton>
      </ViewStyle>
    </ThemeProvider>
  );
};

export default login;
