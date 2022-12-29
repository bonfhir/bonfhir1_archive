/**
 * Status codes used in the workflow of treatment administration events.
 * http://terminology.hl7.org/ValueSet/v2-0322
 */
export const Hl7VSCompletionStatusCode = {
  /**
   * Complete
   */
  Complete: "CP",

  /**
   * Refused
   */
  Refused: "RE",

  /**
   * Not Administered
   */
  NotAdministered: "NA",

  /**
   * Partially Administered
   */
  PartiallyAdministered: "PA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCompletionStatusCode =
  typeof Hl7VSCompletionStatusCode[keyof typeof Hl7VSCompletionStatusCode];
