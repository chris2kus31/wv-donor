import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    color: "gray.900",
  },
  variants: {
    link: {
      color: "gray.700",
      cursor: "pointer",
    },
  },
});

export default Text;
