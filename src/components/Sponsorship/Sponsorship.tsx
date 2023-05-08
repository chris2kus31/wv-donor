import WorldMap from "@/assets/images/world-map.png";
import useGetSponsorships from "@/hooks/useGetSponsorships";
import { ISponsorshipFilters } from "@/lib/Sponsorship";
import { Box, Divider, Heading } from "@chakra-ui/react";
import { useState } from "react";
import CenteredSpinner from "../Common/CenteredSpinner";
import SponsorshipFilter, {
  ISponsorshipSelectedFilter,
} from "./SponsorshipFilter";
import SponsorshipList from "./SponsorshipList";

const Sponsorship = () => {
  const [appliedFilters, setAppliedFilters] =
    useState<ISponsorshipSelectedFilter>({});

  const { sponsorshipDetails, isLoading } = useGetSponsorships(
    appliedFilters as ISponsorshipFilters
  );

  return (
    <>
      <Box
        p={[2, 5, 10]}
        borderRadius="8px 8px 0px 0px"
        backgroundColor={"#34B798"}
      >
        <Heading color="white">Sponsor a child</Heading>

        <Divider my={5} borderWidth={1} />

        <SponsorshipFilter
          onFilterChange={(appliedFilters) => setAppliedFilters(appliedFilters)}
        />
      </Box>

      <Box
        p={[2, 5, 10]}
        backgroundColor={"#1B3240"}
        backgroundImage={`url(${WorldMap.src})`}
        backgroundBlendMode={"color-burn"}
      >
        {isLoading ? (
          <CenteredSpinner />
        ) : (
          <SponsorshipList sponsorshipDetails={sponsorshipDetails} />
        )}
      </Box>
    </>
  );
};

export default Sponsorship;
