/**
 * Value Set of codes specifying the reason for a process interruption.
 * http://terminology.hl7.org/ValueSet/v2-0935
 */
export const Hl7VSProcessInterruptionReasonCode = {
  /**
   * No reason given, donor decided to stop without giving a reason
   */
  NRG: "NRG",

  /**
   * Phone Call-Donor
   */
  PCD: "PCD",

  /**
   * Couldn't wait
   */
  DCW: "DCW",

  /**
   * Couldn't follow through with donation (scared)
   */
  CFT: "CFT",

  /**
   * Bathroom
   */
  DBB: "DBB",

  /**
   * Phlebotomy Issue
   */
  DNI: "DNI",

  /**
   * Apheresis Software Crash
   */
  ASC: "ASC",

  /**
   * Manufacturing Software Crash
   */
  BSC: "BSC",

  /**
   * General Facility Emergency
   */
  GFE: "GFE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessInterruptionReasonCode =
  typeof Hl7VSProcessInterruptionReasonCode[keyof typeof Hl7VSProcessInterruptionReasonCode];
