import { Pressable, StyleSheet, Text, View } from "react-native";
import { styled } from "styled-components/native";

// font - czcionka
//padding - na zwiekszenie objetosci przycisku 10px w gore
//align-items: center do wysreodkowania rzeczy w tym pressable bo nalezy uzyc flexbox n apoziomie kontenera
//justify-conten: center do wysrodkowania w pionie tak jak align-items w poziomie
// border-radius - zaokraglenie rogow
//border - grubosc, czy ma byc nieprzerwana linia , color
// margin-top odstep od przycisku z gory
// kolory nie w cudzyslowiu

export const TopLeftView = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ViewStyle = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 400px;
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.headLines};
  text-align: center;
  font-size: ${(props) => props.theme.text.headlineFontSize};
  font-weight: ${(props) => props.theme.text.headlineFontWeight};
  margin-bottom: 40px;
`;

export const StyledTextInput = styled.TextInput`
  padding: 10px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.background};
  text-align: left;
  justify-content: center;
  border-radius: 30px;
  font-size: 15px;
  margin-top: 30px;
  border: 2px solid black;
`;

export const StyledButton = styled(Pressable)`
  background-color: ${(props) => props.theme.colors.headLines};
  padding: 10px;
  width: 250px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-top: ${(props) => props.theme.buttons.marginTop || "10px"};
  border: 2px solid ${(props) => props.theme.colors.border};
`;

export const ButtonText = styled(Text)`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;

  font-weight: lighter;
`;
