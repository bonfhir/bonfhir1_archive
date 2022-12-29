/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SuspensionDrugForm
 */
export const SuspensionDrugFormCode = {
  /**
   * Suspension
   */
  Suspension: "SUSP",

  /**
   * Intrathecal Suspension
   */
  IntrathecalSuspension: "ITSUSP",

  /**
   * Ophthalmic Suspension
   */
  OphthalmicSuspension: "OPSUSP",

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

  /**
   * Otic Suspension
   */
  OticSuspension: "OTSUSP",

  /**
   * Rectal Suspension
   */
  RectalSuspension: "RECSUSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SuspensionDrugFormCode =
  typeof SuspensionDrugFormCode[keyof typeof SuspensionDrugFormCode];
