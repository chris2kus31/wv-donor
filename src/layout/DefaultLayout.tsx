import { Box } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

interface DefaultLayoutProps {
  children: React.ReactNode;
  bgImage?: StaticImageData;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box p={[2, 5, 10]}>
      <Box>{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
