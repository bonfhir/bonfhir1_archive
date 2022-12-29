/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NaturalParent
 */
export const NaturalParentCode = {
  /**
   * natural parent
   */
  naturalparent: "NPRN",

  /**
   * natural father
   */
  naturalfather: "NFTH",

  /**
   * natural father of fetus
   */
  naturalfatheroffetus: "NFTHF",

  /**
   * natural mother
   */
  naturalmother: "NMTH",

  /**
   * natural mother of fetus
   */
  naturalmotheroffetus: "NMTHF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NaturalParentCode =
  typeof NaturalParentCode[keyof typeof NaturalParentCode];
