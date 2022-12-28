/**
 * The Participation status of an appointment.
 * http://hl7.org/fhir/ValueSet/participationstatus
 */
export const ParticipationStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationStatusCode =
  typeof ParticipationStatusCode[keyof typeof ParticipationStatusCode];
