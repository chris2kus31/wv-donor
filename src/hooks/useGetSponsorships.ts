import {
  getSponsorships,
  ISponsorshipAPIResponse,
  ISponsorshipFilters,
} from "@/lib/Sponsorship";
import { useEffect, useState } from "react";

const SORT_ORDER = 0;
const TOTAL_RESULTS_TO_FETCH = 6;

const useGetSponsorships = ({
  gender,
  minimumAge,
  maximumAge,
  minimumBirthMonth,
  maximumBirthMonth,
  minimumBirthDayOfMonth,
  maximumBirthDayOfMonth,
  orphan,
  countryCodes,
  availableFlag = true,
  webPublishableFlag = true,
}: ISponsorshipFilters) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sponsorshipDetails, setSponsorshipDetails] =
    useState<ISponsorshipAPIResponse | null>();

  const fetchSponsorships = ({ ...props }: ISponsorshipFilters) => {
    setIsLoading(true);
    getSponsorships({
      sponsorshipFilters: {
        searchCriteriaList: [
          {
            ...props,
          },
        ],
        sortOrder: SORT_ORDER,
        take: TOTAL_RESULTS_TO_FETCH,
      },
    })
      .then((fetchedSponsorshipDetails) => {
        setSponsorshipDetails(fetchedSponsorshipDetails);
      })
      .catch(() => setSponsorshipDetails(null))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchSponsorships({
      gender,
      minimumAge,
      maximumAge,
      minimumBirthMonth,
      maximumBirthMonth,
      minimumBirthDayOfMonth,
      maximumBirthDayOfMonth,
      orphan,
      countryCodes,
      availableFlag,
      webPublishableFlag,
    });
  }, [
    gender,
    minimumAge,
    maximumAge,
    minimumBirthMonth,
    maximumBirthMonth,
    minimumBirthDayOfMonth,
    maximumBirthDayOfMonth,
    orphan,
    countryCodes,
    availableFlag,
    webPublishableFlag,
  ]);

  return { sponsorshipDetails, isLoading };
};

export default useGetSponsorships;
