/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xPersonNamePartType
 */
export const XPersonNamePartTypeCode = {
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
export type XPersonNamePartTypeCode =
  typeof XPersonNamePartTypeCode[keyof typeof XPersonNamePartTypeCode];
