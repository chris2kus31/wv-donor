import { ISponsorshipAPIResponse } from "@/lib/Sponsorship";
import { primaryColor } from "@/theme/colors";
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdCake } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import SponsorshipCard from "./SponsorshipCard";

interface SponsorshipListProps {
  sponsorshipDetails?: ISponsorshipAPIResponse | null;
}

const SponsorshipList = ({ sponsorshipDetails }: SponsorshipListProps) => {
  if (!sponsorshipDetails || !sponsorshipDetails.data.items.length)
    return (
      <Alert status="error" variant="subtle">
        <AlertIcon />
        There are no children matching your search criteria
      </Alert>
    );

  return (
    <>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {sponsorshipDetails.data.items.map((sponsorship) => (
          <GridItem key={sponsorship.identifier}>
            <SponsorshipCard sponsorship={sponsorship} />
          </GridItem>
        ))}
      </Grid>

      <Flex
        direction={["column-reverse", "row", "row"]}
        mt={10}
        justifyContent="space-between"
      >
        <Box mt={[5, 0, 0]}>
          <b>Total:</b> {sponsorshipDetails.data.totalCount}
        </Box>
        <Flex direction={["column-reverse", "row", "row"]} gap={15}>
          <Legend icon={MdCake} label="Birthdate" />
          <Legend icon={BiWorld} label="Country" />
          <Legend icon={FaCalendarAlt} label="Age" />
          <Legend icon={RiParentFill} label="Is Orphan?" />
        </Flex>
      </Flex>
    </>
  );
};

const Legend = ({ icon, label }: { icon: IconType; label: string }) => {
  return (
    <HStack>
      <Icon as={icon} color={primaryColor} fontSize="20px" />
      <Text>{label}</Text>
    </HStack>
  );
};

export default SponsorshipList;
