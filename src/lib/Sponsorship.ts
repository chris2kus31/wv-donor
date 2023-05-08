import axios from "./axios";

export const COUNTRY_CODES_MAPPING: Record<string, string> = {
  KEN: "Kenya",
  ETH: "Ethiopia",
  BGD: "Bangladesh",
  CAM: "Cambodia",
  BOL: "Bolivia",
  GTM: "Guatemala",
};

export const GENDER_MAPPING: Record<string, string> = {
  M: "Male",
  F: "Female",
  BOTH: "Both",
};

type CountryCodes = keyof typeof COUNTRY_CODES_MAPPING;

type Gender = "Male" | "Female";

export interface ISponsorship {
  identifier: string;
  supportOfficeChildId: string;
  givenName: string;
  familyName: string | null;
  gender: Gender;
  birthdate: string;
  age: number;
  disabledFlag: boolean;
  orphanFlag: boolean;
  daysAwaitingSponsorshipCount: number;
  availableFlag: boolean;
  inProgramFlag: boolean;
  passedDataQualityCheckFlag: boolean;
  sponsoredFlag: boolean;
  reservationIdentifier: string | null;
  reservationBatchNumber: number | null;
  reservationPurpose: string | null;
  reservationReferenceIdentifier: string | null;
  reservationExpirationDate: string | null;
  reservationChannelCode: string | null;
  reservationChannelDescription: string | null;
  lockIdentifier: string | null;
  lockExpirationDate: string | null;
  favoriteGameCode: string;
  favoriteGameDescription: string;
  livesWithCode: string;
  livesWithDescription: string;
  languageCode: string;
  languageDescription: string;
  highestGrade: number;
  highestEducationLevel: string | null;
  favoriteSubjectCode: string;
  favoriteSubjectDescription: string;
  cgpUrl: string;
  cgpThumbnailUrl: string;
  cgvWebUrl: string;
  cgViPadUrl: string;
  cgvMobileUrl: string;
  regionIdentifier: string;
  regionName: string;
  countryCode: string;
  countryName: string;
  projectIdentifier: string;
  projectName: string;
  webPublishableFlag: boolean;
  webPublishableRestrictionsFlag: boolean;
  christianWitnessSensitivityCode: number;
  christianWitnessSensitivityDescription: string;
  story: string[];
  searchCriteriaPosition: number;
}

export interface ISponsorshipAPIResponse {
  data: {
    currentCount: number;
    totalCount: number;
    items: ISponsorship[];
    success: boolean;
    code: number;
    message: string;
  };
}

export interface ISponsorshipFilters {
  gender?: string;
  minimumAge?: number;
  maximumAge?: number;
  minimumBirthMonth?: number;
  maximumBirthMonth?: number;
  minimumBirthDayOfMonth?: number;
  maximumBirthDayOfMonth?: number;
  orphan?: number;
  countryCodes?: CountryCodes[];
  availableFlag: true;
  webPublishableFlag: true;
}

export interface ISponsorshipPayload {
  searchCriteriaList: ISponsorshipFilters[];
  sortOrder: number;
  take: number;
}

export const getSponsorships = async ({
  sponsorshipFilters,
}: {
  sponsorshipFilters: ISponsorshipPayload;
}) => {
  return await axios
    .post<ISponsorshipAPIResponse>(
      "https://wv-rcds-uat-api.azure-api.net/v3/api/Sponsorship/children/search/web",
      sponsorshipFilters,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "aecbb2aaf5884e8ebe867c21565f0908",
          "Content-Type": "application/json-patch+json",
        },
      }
    )
    .then((response) => response.data)
    .catch(() => {
      return null;
    });
};
