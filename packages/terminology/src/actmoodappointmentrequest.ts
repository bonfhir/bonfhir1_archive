/**
 * A request for the booking of an appointment.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodAppointmentRequest
 */
export const ActMoodAppointmentRequestCode = {
  /**
   * appointment request
   */
  appointmentrequest: "ARQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodAppointmentRequestCode =
  typeof ActMoodAppointmentRequestCode[keyof typeof ActMoodAppointmentRequestCode];
