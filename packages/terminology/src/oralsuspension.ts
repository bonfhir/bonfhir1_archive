/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralSuspension
 */
export const OralSuspensionCode = {
  /**
   * Oral Suspension
   */
  OralSuspension: "ORSUSP",

  /**
   * Extended-Release Suspension
   */
  ExtendedReleaseSuspension: "ERSUSP",

  /**
   * 12 Hour Extended-Release Suspension
   */
  TwelveHourExtendedReleaseSuspension: "ERSUSP12",

  /**
   * 24 Hour Extended Release Suspension
   */
  TwentyFourHourExtendedReleaseSuspension: "ERSUSP24",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSuspensionCode =
  typeof OralSuspensionCode[keyof typeof OralSuspensionCode];
