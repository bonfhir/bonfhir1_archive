/**
 * Indicates the status of the care team.
 * http://hl7.org/fhir/ValueSet/care-team-status
 */
export const CareTeamStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CareTeamStatusCode =
  typeof CareTeamStatusCode[keyof typeof CareTeamStatusCode];
