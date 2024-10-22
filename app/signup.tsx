import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme, invertTheme } from "@/constants/Themes";
import { Link } from "expo-router";
import { styled } from "styled-components/native";

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
        <StyledText>Create New Account</StyledText>
        <StyledTextInput
          placeholder="Full Name"
          placeholderTextColor={"black"}
          onChangeText={(newText) => setUser(newText)}
          value={userName}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Phone Number"
          placeholderTextColor={"black"}
          secureTextEntry={true}
          onChangeText={(newText) => setPhoneNumber(newText)}
          value={phoneNumber}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="E-mail"
          placeholderTextColor={"black"}
          secureTextEntry={true}
          onChangeText={(newText) => setEmail(newText)}
          value={email}
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Password"
          placeholderTextColor={"black"}
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
