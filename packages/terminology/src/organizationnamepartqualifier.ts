/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OrganizationNamePartQualifier
 */
export const OrganizationNamePartQualifierCode = {
  /**
   * academic
   */
  academic: "AC",

  /**
   * adopted
   */
  adopted: "AD",

  /**
   * birth
   */
  birth: "BR",

  /**
   * callme
   */
  callme: "CL",

  /**
   * initial
   */
  initial: "IN",

  /**
   * Legal status
   */
  Legalstatus: "LS",

  /**
   * nobility
   */
  nobility: "NB",

  /**
   * professional
   */
  professional: "PR",

  /**
   * spouse
   */
  spouse: "SP",

  /**
   * title
   */
  title: "TITLE",

  /**
   * voorvoegsel
   */
  voorvoegsel: "VV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationNamePartQualifierCode =
  typeof OrganizationNamePartQualifierCode[keyof typeof OrganizationNamePartQualifierCode];
