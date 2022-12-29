/**
 * An action taken with respect to a subject Entity by a regulatory or authoritative body with supervisory capacity over that entity. The action is taken in response to behavior by the subject Entity that body finds to be undesirable.

Suspension, license restrictions, monetary fine, letter of reprimand, mandated training, mandated supervision, etc.*Examples:*
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkRelated
 */
export const RoleLinkRelatedCode = {
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
export type RoleLinkRelatedCode =
  typeof RoleLinkRelatedCode[keyof typeof RoleLinkRelatedCode];
