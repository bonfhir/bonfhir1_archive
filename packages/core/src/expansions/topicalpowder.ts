/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TopicalPowder
 */
export const TopicalPowderCode = {
  /**
   * Topical Powder
   */
  TOPPWD: "TOPPWD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TopicalPowderCode =
  typeof TopicalPowderCode[keyof typeof TopicalPowderCode];
