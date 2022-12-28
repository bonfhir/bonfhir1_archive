/**
 * Value Set of codes specifying a root cause.
 * http://terminology.hl7.org/ValueSet/v2-0914
 */
export const Hl7VSRootCauseCode = {
  /**
   * Analysis Process
   */
  AP: "AP",

  /**
   * Information Management
   */
  IM: "IM",

  /**
   * Laboratory
   */
  L: "L",

  /**
   * Not Applicable
   */
  NA: "NA",

  /**
   * Placer Data
   */
  PD: "PD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRootCauseCode =
  typeof Hl7VSRootCauseCode[keyof typeof Hl7VSRootCauseCode];
