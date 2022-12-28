/**
 * Is the Participant required to attend the appointment.
 * http://hl7.org/fhir/ValueSet/participantrequired
 */
export const ParticipantRequiredCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipantRequiredCode =
  typeof ParticipantRequiredCode[keyof typeof ParticipantRequiredCode];
