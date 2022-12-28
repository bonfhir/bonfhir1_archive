/**
 * Roles of participants that may be included in a care team.  Defined as: Is a Person, Healthcare professional (occupation) or Healthcare related organization (qualifier value).
 * http://hl7.org/fhir/ValueSet/careteam-participant-role
 */
export const ParticipantRolesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipantRolesCode =
  typeof ParticipantRolesCode[keyof typeof ParticipantRolesCode];
