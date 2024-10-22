import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme, invertTheme } from "@/constants/Themes";
import { styled } from "styled-components/native";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const ViewStyle = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.headLines};
  text-align: center;
  font-size: ${(props) => props.theme.text.headlineFontSize};
  font-weight: ${(props) => props.theme.text.headlineFontWeight};
  margin-top: 20px;
  margin-left: -220px;
  margin-bottom: 50px;
`;

const StyledTextInput = styled.TextInput`
  padding: 10px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.background};
  text-align: left;
  justify-content: center;
  border-radius: 30px;
  font-size: 15px;
  border: 2px solid black;
  color: black;
  margin-bottom: 30px;
`;

const StyledButton = styled(Pressable)`
  background-color: ${(props) => props.theme.colors.headLines};
  padding: 10px;
  width: 250px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 30px;
  border: 2px solid ${(props) => props.theme.colors.border};
`;

const ButtonText = styled(Text)`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: lighter;
`;

const StyledNormalText = styled.Text`
  font-size: larger;
  margin-bottom: 30px;
`;

const login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <ViewStyle>
        <StyledText>Sign In</StyledText>
        <StyledTextInput
          placeholder="E-mail or phone number"
          placeholderTextColor={"black"}
          onChangeText={(newText) => setLogin(newText)}
          value={login}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          onChangeText={(newText) => setPassword(newText)}
          value={password}
        ></StyledTextInput>
        <StyledButton>
          <ButtonText>Log In</ButtonText>
        </StyledButton>
        <StyledNormalText>OR</StyledNormalText>
        <StyledButton>
          <ButtonText>Loin With Facebook</ButtonText>
        </StyledButton>
      </ViewStyle>
    </ThemeProvider>
  );
};

export default login;
