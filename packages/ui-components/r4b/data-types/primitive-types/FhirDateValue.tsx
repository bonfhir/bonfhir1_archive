import { ReactElement } from "react";

export interface FhirDateValueProps {
  /**
   * A valid FHIR Date.
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
export function FhirDateValue({
  value,
}: FhirDateValueProps): ReactElement | null {
  if (!value) {
    return null;
  }

  // TODO: properly parse and format date value.
  return <>{value}</>;
}
