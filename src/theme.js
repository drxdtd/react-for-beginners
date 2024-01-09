// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  styles: (props) => ({
    global: {
      body: {
        backgroundColor: props.colorMode === "dark" ? "black" : "white",
      },
    },
  }),
  config,
});

export default theme;
