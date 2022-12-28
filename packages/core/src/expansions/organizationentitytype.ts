/**
 * Further classifies entities of classCode ORG.
 * http://terminology.hl7.org/ValueSet/v3-OrganizationEntityType
 */
export const OrganizationEntityTypeCode = {
  /**
   * OrganizationEntityType
   */
  _OrganizationEntityType: "_OrganizationEntityType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationEntityTypeCode =
  typeof OrganizationEntityTypeCode[keyof typeof OrganizationEntityTypeCode];
