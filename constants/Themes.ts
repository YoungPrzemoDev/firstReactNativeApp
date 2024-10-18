export const theme = {
  colors: {
    headLines: "#e4586a",
    text: "white",
    background: "white",
    border: "white",
  },
  text: {
    font: "Arial",
    headlineFontSize: 30,
    normalFontSize: 15,
    headlineFontWeight: "bold",
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
