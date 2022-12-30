/**
 * An action taken with respect to a subject Entity by a regulatory or authoritative body with supervisory capacity over that entity. The action is taken in response to behavior by the subject Entity that body finds to be undesirable.

Suspension, license restrictions, monetary fine, letter of reprimand, mandated training, mandated supervision, etc.*Examples:*
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkRelated
 */
export const RoleLinkRelatedCode = {
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
export type RoleLinkRelatedCode =
  typeof RoleLinkRelatedCode[keyof typeof RoleLinkRelatedCode];
