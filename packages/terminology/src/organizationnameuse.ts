/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OrganizationNameUse
 */
export const OrganizationNameUseCode = {
  /**
   * Alphabetic
   */
  Alphabetic: "ABC",

  /**
   * Ideographic
   */
  Ideographic: "IDE",

  /**
   * Syllabic
   */
  Syllabic: "SYL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationNameUseCode =
  typeof OrganizationNameUseCode[keyof typeof OrganizationNameUseCode];
