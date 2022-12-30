/**
 * parent of a parent of the subject
 * http://terminology.hl7.org/ValueSet/v3-Grandparent
 */
export const GrandparentCode = {
  /**
   * grandparent
   */
  GRPRN: "GRPRN",

  /**
   * grandfather
   */
  GRFTH: "GRFTH",

  /**
   * maternal grandfather
   */
  MGRFTH: "MGRFTH",

  /**
   * paternal grandfather
   */
  PGRFTH: "PGRFTH",

  /**
   * grandmother
   */
  GRMTH: "GRMTH",

  /**
   * maternal grandmother
   */
  MGRMTH: "MGRMTH",

  /**
   * paternal grandmother
   */
  PGRMTH: "PGRMTH",

  /**
   * maternal grandparent
   */
  MGRPRN: "MGRPRN",

  /**
   * paternal grandparent
   */
  PGRPRN: "PGRPRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GrandparentCode =
  typeof GrandparentCode[keyof typeof GrandparentCode];
