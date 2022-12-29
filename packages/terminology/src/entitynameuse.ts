/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityNameUse
 */
export const EntityNameUseCode = {
  /**
   * NameRepresentationUse
   */
  NameRepresentationUse: "_NameRepresentationUse",

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

  /**
   * assigned
   */
  assigned: "ASGN",

  /**
   * License
   */
  License: "C",

  /**
   * Indigenous/Tribal
   */
  IndigenousTribal: "I",

  /**
   * Legal
   */
  Legal: "L",

  /**
   * official registry
   */
  officialregistry: "OR",

  /**
   * pseudonym
   */
  pseudonym: "P",

  /**
   * Artist/Stage
   */
  ArtistStage: "A",

  /**
   * Religious
   */
  Religious: "R",

  /**
   * search
   */
  search: "SRCH",

  /**
   * phonetic
   */
  phonetic: "PHON",

  /**
   * Soundex
   */
  Soundex: "SNDX",

  /**
   * EntityNameSearchUse
   */
  EntityNameSearchUse: "_EntityNameSearchUse",

  /**
   * OrganizationNameUse
   */
  OrganizationNameUse: "_OrganizationNameUse",

  /**
   * PersonNameUse
   */
  PersonNameUse: "_PersonNameUse",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNameUseCode =
  typeof EntityNameUseCode[keyof typeof EntityNameUseCode];
