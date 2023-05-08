import {
  COUNTRY_CODES_MAPPING,
  GENDER_MAPPING,
  ISponsorshipFilters,
} from "@/lib/Sponsorship";
import { Checkbox, Flex } from "@chakra-ui/react";
import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { MultiValue, SingleValue } from "react-select/dist/declarations/src";
import FormFieldContainer from "../Common/FormFieldContainer";
import styles from "./Sponsorship.module.css";

export interface ISponsorshipSelectedFilter
  extends Pick<
    ISponsorshipFilters,
    | "gender"
    | "minimumAge"
    | "maximumAge"
    | "minimumBirthMonth"
    | "maximumBirthMonth"
    | "minimumBirthDayOfMonth"
    | "maximumBirthDayOfMonth"
    | "orphan"
    | "countryCodes"
  > {}

type SelectedOption = { value: string; label: string };

const genderOptions = Object.keys(GENDER_MAPPING).map((gender) => ({
  value: gender,
  label: GENDER_MAPPING[gender],
}));

const countryOptions = Object.keys(COUNTRY_CODES_MAPPING).map(
  (countryCode) => ({
    value: countryCode,
    label: COUNTRY_CODES_MAPPING[countryCode],
  })
);

const SponsorshipFilter = ({
  onFilterChange,
}: {
  onFilterChange: (selectedFilters: ISponsorshipSelectedFilter) => void;
}) => {
  const [sponsorFilter, setSponsorFilter] =
    useState<ISponsorshipSelectedFilter>({});
  const [dob, setDob] = useState<Date | null>();

  const onCountryChange = (selectedCountries: MultiValue<SelectedOption>) => {
    setSponsorFilter((appliedSponsorFilter) => ({
      ...appliedSponsorFilter,
      countryCodes: selectedCountries?.length
        ? selectedCountries.map((country) => country.value)
        : undefined,
    }));
  };

  const onGenderChange = (selectedGender: SingleValue<SelectedOption>) => {
    setSponsorFilter((appliedSponsorFilter) => ({
      ...appliedSponsorFilter,
      gender:
        selectedGender?.value === "BOTH" ? undefined : selectedGender?.value,
    }));
  };

  const onDOBChange = (dobDate: Date | null) => {
    setDob(dobDate);
    let age: number | undefined = undefined;
    let selectedMonth: number | undefined = undefined;
    let selectedDay: number | undefined = undefined;

    if (dobDate) {
      const selectedDate = moment(dobDate, "YYYY-MM-DD");
      const currentDate = moment();
      age = currentDate.diff(selectedDate, "year");
      selectedMonth = parseInt(selectedDate.format("MM"));
      selectedDay = parseInt(selectedDate.format("DD"));
    }

    setSponsorFilter((appliedSponsorFilter) => ({
      ...appliedSponsorFilter,
      minimumAge: age,
      maximumAge: age,
      minimumBirthMonth: selectedMonth,
      maximumBirthMonth: selectedMonth,
      minimumBirthDayOfMonth: selectedDay,
      maximumBirthDayOfMonth: selectedDay,
    }));
  };

  const onIsOrphanChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSponsorFilter((appliedSponsorFilter) => ({
      ...appliedSponsorFilter,
      orphan: event.target.checked ? parseInt(event.target.value) : undefined,
    }));
  };

  useEffect(() => {
    onFilterChange(sponsorFilter);
  }, [sponsorFilter]);

  return (
    <Flex direction={["column", "row", "row"]} gap={5}>
      <FormFieldContainer label="Country">
        <Select
          placeholder="Select Country..."
          options={countryOptions}
          isMulti
          onChange={onCountryChange}
        />
      </FormFieldContainer>

      <FormFieldContainer label="Gender">
        <Select
          placeholder="Select Gender..."
          options={genderOptions}
          onChange={onGenderChange}
          isClearable
        />
      </FormFieldContainer>

      <FormFieldContainer label="Birthdate">
        <DatePicker
          selected={dob}
          wrapperClassName="datePicker"
          onChange={onDOBChange}
          className={styles.datePicker}
          placeholderText="Birthdate"
          maxDate={new Date()}
          isClearable
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
      </FormFieldContainer>

      <FormFieldContainer label="Is Orphan?">
        <Checkbox
          isChecked={sponsorFilter.orphan === 2}
          onChange={onIsOrphanChange}
          color="white"
          value={2}
        >
          Yes
        </Checkbox>

        <Checkbox
          isChecked={sponsorFilter.orphan === 1}
          onChange={onIsOrphanChange}
          color="white"
          value={1}
          ml={2}
        >
          No
        </Checkbox>
      </FormFieldContainer>
    </Flex>
  );
};

export default SponsorshipFilter;
