/**
 * A code specifying the meaning and purpose of every RoleLink instance. Each of its values implies specific constraints to what kinds of Role objects can be related and in which way.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkType
 */
export const RoleLinkTypeCode = {
  /**
   * related
   */
  related: "REL",

  /**
   * is backup for
   */
  isbackupfor: "BACKUP",

  /**
   * has contact
   */
  hascontact: "CONT",

  /**
   * has direct authority over
   */
  hasdirectauthorityover: "DIRAUTH",

  /**
   * Identification
   */
  Identification: "IDENT",

  /**
   * has indirect authority over
   */
  hasindirectauthorityover: "INDAUTH",

  /**
   * has part
   */
  haspart: "PART",

  /**
   * replaces
   */
  replaces: "REPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkTypeCode =
  typeof RoleLinkTypeCode[keyof typeof RoleLinkTypeCode];
