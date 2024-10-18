import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme, invertTheme } from "@/constants/Themes";
import { ViewStyle, StyledText, StyledButton, ButtonText } from "@/app/style";
import { Link } from "expo-router";

const index = () => {
  //const invertTheme = invertedTheme(theme);

  return (
    <ThemeProvider theme={theme}>
      <ViewStyle>
        <StyledText>Say hello to your new app</StyledText>
        <Link href="/login" asChild>
          <StyledButton>
            <ButtonText>Log in</ButtonText>
          </StyledButton>
        </Link>

        <ThemeProvider theme={invertTheme(theme)}>
          <Link href="/signup" asChild>
            <StyledButton>
              <ButtonText>Sign up</ButtonText>
            </StyledButton>
          </Link>
        </ThemeProvider>
      </ViewStyle>
    </ThemeProvider>
  );
};

export default index;
