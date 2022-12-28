/**
 * **Description:**Coded observation values for coverage limitations, for e.g., types of claims or types of parties covered under a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-CoverageLimitObservationValue
 */
export const CoverageLimitObservationValueCode = {
  /**
   * CoverageLimitObservationValue
   */
  _CoverageLimitObservationValue: "_CoverageLimitObservationValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageLimitObservationValueCode =
  typeof CoverageLimitObservationValueCode[keyof typeof CoverageLimitObservationValueCode];
