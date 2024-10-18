import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Link } from "expo-router";
import { theme, invertTheme } from "@/constants/Themes";
import {
  ViewStyle,
  StyledText,
  StyledButton,
  ButtonText,
  TopLeftView,
} from "@/app/style";

const signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <ViewStyle>
        <TopLeftView>
          <StyledText>Sign up</StyledText>
        </TopLeftView>
      </ViewStyle>
    </ThemeProvider>
  );
};

export default signup;
