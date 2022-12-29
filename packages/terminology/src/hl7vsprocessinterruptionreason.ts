/**
 * Value Set of codes specifying the reason for a process interruption.
 * http://terminology.hl7.org/ValueSet/v2-0935
 */
export const Hl7VSProcessInterruptionReasonCode = {
  /**
   * No reason given, donor decided to stop without giving a reason
   */
  Noreasongivendonordecidedtostopwithoutgivingareason: "NRG",

  /**
   * Phone Call-Donor
   */
  PhoneCallDonor: "PCD",

  /**
   * Couldn't wait
   */
  Couldntwait: "DCW",

  /**
   * Couldn't follow through with donation (scared)
   */
  Couldntfollowthroughwithdonationscared: "CFT",

  /**
   * Bathroom
   */
  Bathroom: "DBB",

  /**
   * Phlebotomy Issue
   */
  PhlebotomyIssue: "DNI",

  /**
   * Apheresis Software Crash
   */
  ApheresisSoftwareCrash: "ASC",

  /**
   * Manufacturing Software Crash
   */
  ManufacturingSoftwareCrash: "BSC",

  /**
   * General Facility Emergency
   */
  GeneralFacilityEmergency: "GFE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessInterruptionReasonCode =
  typeof Hl7VSProcessInterruptionReasonCode[keyof typeof Hl7VSProcessInterruptionReasonCode];
