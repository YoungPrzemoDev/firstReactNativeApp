import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme, invertTheme } from "@/constants/Themes";
import { Link } from "expo-router";
import { styled } from "styled-components/native";

// font - czcionka
//padding - na zwiekszenie objetosci przycisku 10px w gore
//align-items: center do wysreodkowania rzeczy w tym pressable bo nalezy uzyc flexbox n apoziomie kontenera
//justify-conten: center do wysrodkowania w pionie tak jak align-items w poziomie
// border-radius - zaokraglenie rogow
//border - grubosc, czy ma byc nieprzerwana linia , color
// margin-top odstep od przycisku z gory
// kolory nie w cudzyslowiu

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
  margin-top: 200px;
  margin-bottom: 60px;
`;

const StyledButton = styled(Pressable)`
  background-color: ${(props) => props.theme.colors.headLines};
  padding: 10px;
  width: 250px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 15px;
  border: 2px solid ${(props) => props.theme.colors.border};
`;

const ButtonText = styled(Text)`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: lighter;
`;

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
