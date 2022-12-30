/**
 * Value Set of codes that specify whether the days are denied, pending or approved.
 * http://terminology.hl7.org/ValueSet/v2-0149
 */
export const Hl7VSDayTypeCode = {
  /**
   * Approved
   */
  AP: "AP",

  /**
   * Denied
   */
  DE: "DE",

  /**
   * Pending
   */
  PE: "PE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDayTypeCode =
  typeof Hl7VSDayTypeCode[keyof typeof Hl7VSDayTypeCode];
