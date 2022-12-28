/**
 * The type of participant for the action.
 * http://hl7.org/fhir/ValueSet/action-participant-type
 */
export const ActionParticipantTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionParticipantTypeCode =
  typeof ActionParticipantTypeCode[keyof typeof ActionParticipantTypeCode];
