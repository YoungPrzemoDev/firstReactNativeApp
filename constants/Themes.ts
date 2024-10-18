import { Button } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export const theme = {
  colors: {
    headLines: "#e4586a",
    text: "white",
    background: "white",
    blue: "blue",
    border: "white",
  },
  text: {
    headlineFontSize: "40px",
    normalFontSize: "15px",
    headlineFontWeight: "bold",
  },
  buttons: {
    marginTop: "25px",
  },
};

export const invertTheme = ({ colors }) => ({
  colors: {
    headLines: colors.text,
    text: colors.headLines,
    background: "white",
    border: colors.headLines,
  },
});
