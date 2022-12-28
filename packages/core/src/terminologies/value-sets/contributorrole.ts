/**
 * Used to code the format of the display string.
 * http://hl7.org/fhir/ValueSet/contributor-role
 */
export const ContributorRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContributorRoleCode =
  typeof ContributorRoleCode[keyof typeof ContributorRoleCode];
