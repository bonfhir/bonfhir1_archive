/**
 * parent of a parent of the subject
 * http://terminology.hl7.org/ValueSet/v3-Grandparent
 */
export const GrandparentCode = {
  /**
   * grandparent
   */
  grandparent: "GRPRN",

  /**
   * grandfather
   */
  grandfather: "GRFTH",

  /**
   * maternal grandfather
   */
  maternalgrandfather: "MGRFTH",

  /**
   * paternal grandfather
   */
  paternalgrandfather: "PGRFTH",

  /**
   * grandmother
   */
  grandmother: "GRMTH",

  /**
   * maternal grandmother
   */
  maternalgrandmother: "MGRMTH",

  /**
   * paternal grandmother
   */
  paternalgrandmother: "PGRMTH",

  /**
   * maternal grandparent
   */
  maternalgrandparent: "MGRPRN",

  /**
   * paternal grandparent
   */
  paternalgrandparent: "PGRPRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GrandparentCode =
  typeof GrandparentCode[keyof typeof GrandparentCode];
