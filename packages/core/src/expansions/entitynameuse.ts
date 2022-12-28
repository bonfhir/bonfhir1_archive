/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityNameUse
 */
export const EntityNameUseCode = {
  /**
   * NameRepresentationUse
   */
  _NameRepresentationUse: "_NameRepresentationUse",

  /**
   * assigned
   */
  ASGN: "ASGN",

  /**
   * License
   */
  C: "C",

  /**
   * Indigenous/Tribal
   */
  I: "I",

  /**
   * Legal
   */
  L: "L",

  /**
   * pseudonym
   */
  P: "P",

  /**
   * Religious
   */
  R: "R",

  /**
   * search
   */
  SRCH: "SRCH",

  /**
   * EntityNameSearchUse
   */
  _EntityNameSearchUse: "_EntityNameSearchUse",

  /**
   * OrganizationNameUse
   */
  _OrganizationNameUse: "_OrganizationNameUse",

  /**
   * PersonNameUse
   */
  _PersonNameUse: "_PersonNameUse",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNameUseCode =
  typeof EntityNameUseCode[keyof typeof EntityNameUseCode];
