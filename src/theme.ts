import { extendTheme } from "@chakra-ui/react";
import Colors from "./theme/colors";
import Text from "./theme/text";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
  components: {
    Text,
  },
  colors: {
    ...Colors,
  },
  fonts: {
    body: "Montserrat, Arial, system-ui, -apple-system, sans-serif",
    heading: "Montserrat, system-ui, -apple-system, sans-serif",
  },
  breakpoints: {
    sm: "30em",
    md: "60em",
    lg: "90em",
    xl: "120em",
    xxl: "140em",
  },
});

export default theme;
