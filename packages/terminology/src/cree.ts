/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Cree
 */
export const CreeCode = {
  /**
   * Western Cree
   */
  WesternCree: "x-CRP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CreeCode = typeof CreeCode[keyof typeof CreeCode];
