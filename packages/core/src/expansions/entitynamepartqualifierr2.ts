/**
 * **Description:**The qualifier is a set of codes each of which specifies a certain subcategory of the name part in addition to the main name part type. For example, a given name may be flagged as a nickname, a family name may be a pseudonym or a name of public records.
 * http://terminology.hl7.org/ValueSet/v3-EntityNamePartQualifierR2
 */
export const EntityNamePartQualifierR2Code = {
  /**
   * acquired
   */
  AD: "AD",

  /**
   * birth
   */
  BR: "BR",

  /**
   * callme
   */
  CL: "CL",

  /**
   * initial
   */
  IN: "IN",

  /**
   * legal status
   */
  LS: "LS",

  /**
   * middle name
   */
  MID: "MID",

  /**
   * prefix
   */
  PFX: "PFX",

  /**
   * PharmaceuticalEntityNamePartQualifiers
   */
  PharmaceuticalEntityNamePartQualifiers:
    "PharmaceuticalEntityNamePartQualifiers",

  /**
   * suffix
   */
  SFX: "SFX",

  /**
   * TitleStyles
   */
  TitleStyles: "TitleStyles",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNamePartQualifierR2Code =
  typeof EntityNamePartQualifierR2Code[keyof typeof EntityNamePartQualifierR2Code];
