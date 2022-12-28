/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OrganizationNamePartQualifier
 */
export const OrganizationNamePartQualifierCode = {
  /**
   * academic
   */
  AC: "AC",

  /**
   * adopted
   */
  AD: "AD",

  /**
   * birth
   */
  BR: "BR",

  /**
   * callme
   */
  CL: "CL",

  /**
   * initial
   */
  IN: "IN",

  /**
   * Legal status
   */
  LS: "LS",

  /**
   * nobility
   */
  NB: "NB",

  /**
   * professional
   */
  PR: "PR",

  /**
   * spouse
   */
  SP: "SP",

  /**
   * title
   */
  TITLE: "TITLE",

  /**
   * voorvoegsel
   */
  VV: "VV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationNamePartQualifierCode =
  typeof OrganizationNamePartQualifierCode[keyof typeof OrganizationNamePartQualifierCode];
