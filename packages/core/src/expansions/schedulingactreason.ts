/**
 * Reasons for cancelling or rescheduling an Appointment
 * http://terminology.hl7.org/ValueSet/v3-SchedulingActReason
 */
export const SchedulingActReasonCode = {
  /**
   * Patient request
   */
  PAT: "PAT",

  /**
   * Unexpected Block (of Schedule)
   */
  BLK: "BLK",

  /**
   * Patient Deceased
   */
  DEC: "DEC",

  /**
   * No Financial Backing
   */
  FIN: "FIN",

  /**
   * Medical Status Altered
   */
  MED: "MED",

  /**
   * In an outside meeting
   */
  MTG: "MTG",

  /**
   * Physician request
   */
  PHY: "PHY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SchedulingActReasonCode =
  typeof SchedulingActReasonCode[keyof typeof SchedulingActReasonCode];
