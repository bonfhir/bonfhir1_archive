/**
 * Value Set of codes that an appointment request to describe the kind of appointment.
 * http://terminology.hl7.org/ValueSet/v2-0277
 */
export const Hl7VSAppointmentTypeCodesCode = {
  /**
   * A request to add a completed appointment, used to maintain records of completed appointments that did not appear in the schedule (e.g., STAT, walk-in, etc.)
   */
  ArequesttoaddacompletedappointmentusedtomaintainrecordsofcompletedappointmentsthatdidnotappearinthescheduleegSTATwalkinetc:
    "COMPLETE",

  /**
   * Routine schedule request type - default if not valued
   */
  Routineschedulerequesttypedefaultifnotvalued: "NORMAL",

  /**
   * A request for a tentative (e.g., “penciled in”) appointment
   */
  Arequestforatentativeegpenciledinappointment: "TENTATIVE",

  /**
   * Routine schedule request type – default if not valued
   */
  Routineschedulerequesttypedefaultifnotvalued: "Normal",

  /**
   * A request for a tentative (e.g., “penciled in”) appointment
   */
  Arequestforatentativeegpenciledinappointment: "Tentative",

  /**
   * A request to add a completed appointment, used to maintain records of completed appointments that did not appear in the schedule (e.g., STAT, walk-in, etc.)
   */
  ArequesttoaddacompletedappointmentusedtomaintainrecordsofcompletedappointmentsthatdidnotappearinthescheduleegSTATwalkinetc:
    "Complete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAppointmentTypeCodesCode =
  typeof Hl7VSAppointmentTypeCodesCode[keyof typeof Hl7VSAppointmentTypeCodesCode];
