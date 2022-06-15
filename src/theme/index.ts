import { extendTheme } from "native-base";

export type CustomTheme = typeof theme;

const theme = extendTheme({
  colors: {
    baseGray: "#E8EAED",
    baseBlue: "#55BCF6",
    baseWhite: "#FFFFFF",
    baseBorderColor: "#F7F7F7",
  },
});

export default theme;
