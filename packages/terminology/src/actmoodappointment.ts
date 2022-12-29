/**
 * A planned Act for a specific time and place.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodAppointment
 */
export const ActMoodAppointmentCode = {
  /**
   * appointment
   */
  appointment: "APT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodAppointmentCode =
  typeof ActMoodAppointmentCode[keyof typeof ActMoodAppointmentCode];
