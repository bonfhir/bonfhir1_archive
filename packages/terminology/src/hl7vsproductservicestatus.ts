/**
 * Value Set of codes that specify the processing status for the Product/Service Code.
 * http://terminology.hl7.org/ValueSet/v2-0559
 */
export const Hl7VSProductServiceStatusCode = {
  /**
   * Processed
   */
  Processed: "P",

  /**
   * Denied
   */
  Denied: "D",

  /**
   * Rejected
   */
  Rejected: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProductServiceStatusCode =
  typeof Hl7VSProductServiceStatusCode[keyof typeof Hl7VSProductServiceStatusCode];
