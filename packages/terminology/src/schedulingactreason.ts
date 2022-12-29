/**
 * Reasons for cancelling or rescheduling an Appointment
 * http://terminology.hl7.org/ValueSet/v3-SchedulingActReason
 */
export const SchedulingActReasonCode = {
  /**
   * Patient request
   */
  Patientrequest: "PAT",

  /**
   * Unexpected Block (of Schedule)
   */
  UnexpectedBlockofSchedule: "BLK",

  /**
   * Patient Deceased
   */
  PatientDeceased: "DEC",

  /**
   * No Financial Backing
   */
  NoFinancialBacking: "FIN",

  /**
   * Medical Status Altered
   */
  MedicalStatusAltered: "MED",

  /**
   * In an outside meeting
   */
  Inanoutsidemeeting: "MTG",

  /**
   * Physician request
   */
  Physicianrequest: "PHY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SchedulingActReasonCode =
  typeof SchedulingActReasonCode[keyof typeof SchedulingActReasonCode];
