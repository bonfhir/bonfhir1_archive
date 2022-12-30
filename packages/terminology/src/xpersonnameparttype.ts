/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xPersonNamePartType
 */
export const XPersonNamePartTypeCode = {
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
export type XPersonNamePartTypeCode =
  typeof XPersonNamePartTypeCode[keyof typeof XPersonNamePartTypeCode];
