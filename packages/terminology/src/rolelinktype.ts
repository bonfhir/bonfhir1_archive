/**
 * A code specifying the meaning and purpose of every RoleLink instance. Each of its values implies specific constraints to what kinds of Role objects can be related and in which way.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkType
 */
export const RoleLinkTypeCode = {
  /**
   * related
   */
  REL: "REL",

  /**
   * is backup for
   */
  BACKUP: "BACKUP",

  /**
   * has contact
   */
  CONT: "CONT",

  /**
   * has direct authority over
   */
  DIRAUTH: "DIRAUTH",

  /**
   * Identification
   */
  IDENT: "IDENT",

  /**
   * has indirect authority over
   */
  INDAUTH: "INDAUTH",

  /**
   * has part
   */
  PART: "PART",

  /**
   * replaces
   */
  REPL: "REPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkTypeCode =
  typeof RoleLinkTypeCode[keyof typeof RoleLinkTypeCode];
