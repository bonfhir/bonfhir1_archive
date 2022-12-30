/**
 * The player of the role is a parent of the scoping person's grandparent.
 * http://terminology.hl7.org/ValueSet/v3-GreatGrandparent
 */
export const GreatGrandparentCode = {
  /**
   * great grandparent
   */
  GGRPRN: "GGRPRN",

  /**
   * great grandfather
   */
  GGRFTH: "GGRFTH",

  /**
   * maternal great-grandfather
   */
  MGGRFTH: "MGGRFTH",

  /**
   * paternal great-grandfather
   */
  PGGRFTH: "PGGRFTH",

  /**
   * great grandmother
   */
  GGRMTH: "GGRMTH",

  /**
   * maternal great-grandmother
   */
  MGGRMTH: "MGGRMTH",

  /**
   * paternal great-grandmother
   */
  PGGRMTH: "PGGRMTH",

  /**
   * maternal great-grandparent
   */
  MGGRPRN: "MGGRPRN",

  /**
   * paternal great-grandparent
   */
  PGGRPRN: "PGGRPRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GreatGrandparentCode =
  typeof GreatGrandparentCode[keyof typeof GreatGrandparentCode];
