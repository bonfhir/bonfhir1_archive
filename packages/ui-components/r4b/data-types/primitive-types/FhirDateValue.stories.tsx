import type { Story } from "@ladle/react";
import { FhirDateValue, FhirDateValueProps } from "./FhirDateValue";

export const Control: Story<FhirDateValueProps> = (props) => (
  <FhirDateValue {...props} />
);

Control.args = {
  value: "2023-02-07",
};
