/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralSuspension
 */
export const OralSuspensionCode = {
  /**
   * Oral Suspension
   */
  ORSUSP: "ORSUSP",

  /**
   * Extended-Release Suspension
   */
  ERSUSP: "ERSUSP",

  /**
   * 12 Hour Extended-Release Suspension
   */
  ERSUSP12: "ERSUSP12",

  /**
   * 24 Hour Extended Release Suspension
   */
  ERSUSP24: "ERSUSP24",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSuspensionCode =
  typeof OralSuspensionCode[keyof typeof OralSuspensionCode];
