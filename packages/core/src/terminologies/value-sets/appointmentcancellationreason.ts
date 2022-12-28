/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 * http://hl7.org/fhir/ValueSet/appointment-cancellation-reason
 */
export const AppointmentCancellationReasonCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AppointmentCancellationReasonCode =
  typeof AppointmentCancellationReasonCode[keyof typeof AppointmentCancellationReasonCode];
