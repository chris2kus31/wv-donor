import { primaryColor } from "@/theme/colors";
import { BoxProps, Flex, Spinner } from "@chakra-ui/react";

interface Props extends BoxProps {
  size?: "sm" | "md" | "lg" | "xl";
  fullScreen?: boolean;
}

const CenteredSpinner = ({
  size = "xl",
  fullScreen = false,
  ...props
}: Props) => {
  return (
    <Flex
      justify="center"
      align="center"
      height={fullScreen ? "100vh" : "auto"}
      {...props}
    >
      <Spinner
        size={size}
        color={primaryColor}
        thickness={size === "sm" || size === "md" ? "2px" : "4px"}
        borderRadius={1000}
      />
    </Flex>
  );
};

export default CenteredSpinner;
