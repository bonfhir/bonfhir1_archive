/**
 * Code specifying non-clinical indicators related to health status used to assess or establish eligibility for coverage under a policy or program, e.g., pregnancy, disability, drug use, mental health issues.
 * http://terminology.hl7.org/ValueSet/v3-ObservationHealthStatusValue
 */
export const ObservationHealthStatusValueCode = {
  /**
   * health status
   */
  HLSTAT: "HLSTAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationHealthStatusValueCode =
  typeof ObservationHealthStatusValueCode[keyof typeof ObservationHealthStatusValueCode];
