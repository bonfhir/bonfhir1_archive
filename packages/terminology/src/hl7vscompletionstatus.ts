/**
 * Status codes used in the workflow of treatment administration events.
 * http://terminology.hl7.org/ValueSet/v2-0322
 */
export const Hl7VSCompletionStatusCode = {
  /**
   * Complete
   */
  CP: "CP",

  /**
   * Refused
   */
  RE: "RE",

  /**
   * Not Administered
   */
  NA: "NA",

  /**
   * Partially Administered
   */
  PA: "PA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCompletionStatusCode =
  typeof Hl7VSCompletionStatusCode[keyof typeof Hl7VSCompletionStatusCode];
