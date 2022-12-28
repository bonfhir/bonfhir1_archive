/**
 * Indicates the type of care team.
 * http://hl7.org/fhir/ValueSet/care-team-category
 */
export const CareTeamCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CareTeamCategoryCode =
  typeof CareTeamCategoryCode[keyof typeof CareTeamCategoryCode];
