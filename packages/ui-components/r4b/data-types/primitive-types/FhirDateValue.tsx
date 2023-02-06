import { ReactElement } from "react";
import { useFhirUIComponentsContext } from "../../FhirUIComponentsContext";

export interface FhirDate {
  /**
   * An object containing each section of valid FHIR Date.
   *
   * @see https://hl7.org/fhir/datatypes.html#date
   */

  year: string;
  month: string | null | undefined;
  day: string | null | undefined;
}

export interface FhirDateValueProps {
  /**
   * A string representing a valid FHIR Date.
   *
   * @see https://hl7.org/fhir/datatypes.html#date
   */
  value: string | null | undefined;
}

/**
 * Render a FHIR date value as a string.
 *
 * @see https://hl7.org/fhir/datatypes.html#date
 */
const fhirDateRegexpCheck = new RegExp(
  "^(?<year>[0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)" +
    "(-(?<month>0[1-9]|1[0-2])" +
    "(-(?<day>0[1-9]|[1-2][0-9]|3[0-1]))?)?$"
);
export function FhirDateValue({
  value,
}: FhirDateValueProps): ReactElement | null {
  const { formatter } = useFhirUIComponentsContext();

  if (!value) {
    return null;
  }

  const matchingData = value.trim().match(fhirDateRegexpCheck)?.groups;
  if (!matchingData?.year)
    throw new Error(
      "Value does not match the fhir date format as described in `https://hl7.org/fhir/datatypes.html#date'"
    );

  const { year, month, day } = matchingData;

  return <>{formatter.formatDate({ year, month, day })}</>;
}
