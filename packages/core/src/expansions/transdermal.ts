/**
 * Transdermal
 * http://terminology.hl7.org/ValueSet/v3-Transdermal
 */
export const TransdermalCode = {
  /**
   * Transdermal
   */
  TRNSDERM: "TRNSDERM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransdermalCode =
  typeof TransdermalCode[keyof typeof TransdermalCode];
