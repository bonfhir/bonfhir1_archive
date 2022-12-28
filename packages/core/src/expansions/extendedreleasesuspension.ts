/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ExtendedReleaseSuspension
 */
export const ExtendedReleaseSuspensionCode = {
  /**
   * Extended-Release Suspension
   */
  ERSUSP: "ERSUSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExtendedReleaseSuspensionCode =
  typeof ExtendedReleaseSuspensionCode[keyof typeof ExtendedReleaseSuspensionCode];
