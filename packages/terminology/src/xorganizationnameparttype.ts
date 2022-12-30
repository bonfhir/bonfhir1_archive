/**
 * A name for an organization, such as "Health Level Seven, Inc." An organization name consists only of untyped name parts, prefixes, suffixes, and delimiters.
 * http://terminology.hl7.org/ValueSet/v3-xOrganizationNamePartType
 */
export const XOrganizationNamePartTypeCode = {
  /**
   * delimiter
   */
  DEL: "DEL",

  /**
   * prefix
   */
  PFX: "PFX",

  /**
   * suffix
   */
  SFX: "SFX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XOrganizationNamePartTypeCode =
  typeof XOrganizationNamePartTypeCode[keyof typeof XOrganizationNamePartTypeCode];
