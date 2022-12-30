/**
 * Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
 * http://terminology.hl7.org/ValueSet/v2-0276
 */
export const Hl7VSAppointmentReasonCodesCode = {
  /**
   * Routine appointment - default if not valued
   */
  ROUTINE: "ROUTINE",

  /**
   * A previously unscheduled walk-in visit
   */
  WALKIN: "WALKIN",

  /**
   * A routine check-up, such as an annual physical
   */
  CHECKUP: "CHECKUP",

  /**
   * A follow up visit from a previous appointment
   */
  FOLLOWUP: "FOLLOWUP",

  /**
   * Emergency appointment
   */
  EMERGENCY: "EMERGENCY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAppointmentReasonCodesCode =
  typeof Hl7VSAppointmentReasonCodesCode[keyof typeof Hl7VSAppointmentReasonCodesCode];
