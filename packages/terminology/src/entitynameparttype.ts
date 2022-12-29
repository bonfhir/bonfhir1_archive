/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityNamePartType
 */
export const EntityNamePartTypeCode = {
  /**
   * delimiter
   */
  delimiter: "DEL",

  /**
   * family
   */
  family: "FAM",

  /**
   * given
   */
  given: "GIV",

  /**
   * prefix
   */
  prefix: "PFX",

  /**
   * suffix
   */
  suffix: "SFX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNamePartTypeCode =
  typeof EntityNamePartTypeCode[keyof typeof EntityNamePartTypeCode];
