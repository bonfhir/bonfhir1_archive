/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityNamePartType
 */
export const EntityNamePartTypeCode = {
  /**
   * delimiter
   */
  DEL: "DEL",

  /**
   * family
   */
  FAM: "FAM",

  /**
   * given
   */
  GIV: "GIV",

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
export type EntityNamePartTypeCode =
  typeof EntityNamePartTypeCode[keyof typeof EntityNamePartTypeCode];
