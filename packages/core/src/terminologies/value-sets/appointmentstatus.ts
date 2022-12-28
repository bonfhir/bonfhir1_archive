/**
 * The free/busy status of an appointment.
 * http://hl7.org/fhir/ValueSet/appointmentstatus
 */
export const AppointmentStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AppointmentStatusCode =
  typeof AppointmentStatusCode[keyof typeof AppointmentStatusCode];
