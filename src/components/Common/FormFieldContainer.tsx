import { FormControl, FormLabel } from "@chakra-ui/react";

interface FormFieldContainerProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

const FormFieldContainer = ({ label, children }: FormFieldContainerProps) => {
  return (
    <FormControl>
      <FormLabel color="white">{label}</FormLabel>
      {children}
    </FormControl>
  );
};

export default FormFieldContainer;
