export const theme = {
  colors: {
    headLines: "#e4586a",
    text: "white",
    background: "white",
    border: "white",
  },
  text: {
    font: "Arial",
    headlineFontSize: "30px",
    normalFontSize: "15px",
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
