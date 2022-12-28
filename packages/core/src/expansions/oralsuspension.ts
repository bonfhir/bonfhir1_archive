/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralSuspension
 */
export const OralSuspensionCode = {
  /**
   * Oral Suspension
   */
  ORSUSP: "ORSUSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSuspensionCode =
  typeof OralSuspensionCode[keyof typeof OralSuspensionCode];
