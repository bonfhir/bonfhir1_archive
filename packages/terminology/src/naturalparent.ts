/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NaturalParent
 */
export const NaturalParentCode = {
  /**
   * natural parent
   */
  NPRN: "NPRN",

  /**
   * natural father
   */
  NFTH: "NFTH",

  /**
   * natural father of fetus
   */
  NFTHF: "NFTHF",

  /**
   * natural mother
   */
  NMTH: "NMTH",

  /**
   * natural mother of fetus
   */
  NMTHF: "NMTHF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NaturalParentCode =
  typeof NaturalParentCode[keyof typeof NaturalParentCode];
