/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SuspensionDrugForm
 */
export const SuspensionDrugFormCode = {
  /**
   * Suspension
   */
  SUSP: "SUSP",

  /**
   * Intrathecal Suspension
   */
  ITSUSP: "ITSUSP",

  /**
   * Ophthalmic Suspension
   */
  OPSUSP: "OPSUSP",

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

  /**
   * Otic Suspension
   */
  OTSUSP: "OTSUSP",

  /**
   * Rectal Suspension
   */
  RECSUSP: "RECSUSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SuspensionDrugFormCode =
  typeof SuspensionDrugFormCode[keyof typeof SuspensionDrugFormCode];
