import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-mono";
import "@fontsource/inter";

const theme = extendTheme({
  fonts: {
    body: `"Inter", sans-serif`,
    mono: `"Roboto Mono", monospace`,
  },
  colors: {
    background: "#020c1b",
    navy: "#0a192f",
    green: "#64ffda",
    hover: "rgba(100,255,218,0.1)",
    grey: {
      grey: "#8892b0",
      light: "#ccd6f6",
      slate: "#a8b2d1",
    },
  },
});

export default theme;
