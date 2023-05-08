import { ISponsorship } from "@/lib/Sponsorship";
import { primaryColor } from "@/theme/colors";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { BiWorld } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import ImageWithLoader from "../Common/ImageWithLoader";

interface SponsorshipCardProps {
  sponsorship: ISponsorship;
}

const SponsorshipCard = ({ sponsorship }: SponsorshipCardProps) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.100"
      borderRadius={10}
      p={2}
      boxShadow="base"
      bg="gray.50"
    >
      <HStack>
        <Box h="200px" w="150px" borderRadius={10}>
          <ImageWithLoader
            src={sponsorship.cgpThumbnailUrl}
            h="200px"
            w="150px"
            borderRadius={10}
            boxShadow="base"
          />
        </Box>

        <Box>
          <VStack alignItems="start">
            <Heading size="md">{sponsorship.givenName}</Heading>
            <HStack>
              <Icon as={MdCake} color={primaryColor} fontSize="20px" />
              <Text>{moment(sponsorship.birthdate).format("MMM Do YYYY")}</Text>
            </HStack>
            <HStack>
              <Icon as={BiWorld} color={primaryColor} fontSize="20px" />
              <Text>{sponsorship.countryName}</Text>
            </HStack>
            <HStack>
              <Icon as={FaCalendarAlt} color={primaryColor} fontSize="20px" />
              <Text>{sponsorship.age} Year(s)</Text>
            </HStack>
            <HStack>
              <Icon as={RiParentFill} color={primaryColor} fontSize="20px" />
              <Text>{sponsorship.orphanFlag ? "Orphan" : "Not an Orphan"}</Text>
            </HStack>
            <Button size="sm" colorScheme="blue">
              Sponsor {sponsorship.gender === "Male" ? "him" : "her"}
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default SponsorshipCard;
