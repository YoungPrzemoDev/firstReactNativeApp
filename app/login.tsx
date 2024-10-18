import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme, invertTheme } from "@/constants/Themes";
import { Link } from "expo-router";
import {
  ViewStyle,
  StyledText,
  StyledButton,
  ButtonText,
  TopLeftView,
} from "@/app/style";

const login = () => {
  return (
    <ThemeProvider theme={theme}>
      <ViewStyle>
        <TopLeftView>
          <StyledText>Sign in</StyledText>
        </TopLeftView>
      </ViewStyle>
    </ThemeProvider>
  );
};

export default login;
