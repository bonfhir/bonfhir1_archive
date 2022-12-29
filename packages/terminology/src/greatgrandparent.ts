/**
 * The player of the role is a parent of the scoping person's grandparent.
 * http://terminology.hl7.org/ValueSet/v3-GreatGrandparent
 */
export const GreatGrandparentCode = {
  /**
   * great grandparent
   */
  greatgrandparent: "GGRPRN",

  /**
   * great grandfather
   */
  greatgrandfather: "GGRFTH",

  /**
   * maternal great-grandfather
   */
  maternalgreatgrandfather: "MGGRFTH",

  /**
   * paternal great-grandfather
   */
  paternalgreatgrandfather: "PGGRFTH",

  /**
   * great grandmother
   */
  greatgrandmother: "GGRMTH",

  /**
   * maternal great-grandmother
   */
  maternalgreatgrandmother: "MGGRMTH",

  /**
   * paternal great-grandmother
   */
  paternalgreatgrandmother: "PGGRMTH",

  /**
   * maternal great-grandparent
   */
  maternalgreatgrandparent: "MGGRPRN",

  /**
   * paternal great-grandparent
   */
  paternalgreatgrandparent: "PGGRPRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GreatGrandparentCode =
  typeof GreatGrandparentCode[keyof typeof GreatGrandparentCode];
