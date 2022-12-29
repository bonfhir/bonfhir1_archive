/**
 * Value Set of codes that specify a person's marital (civil/legal) status.
 * http://terminology.hl7.org/ValueSet/v2-0002
 */
export const Hl7VSMaritalStatusCode = {
  /**
   * Separated
   */
  Separated: "A",

  /**
   * Divorced
   */
  Divorced: "D",

  /**
   * Married
   */
  Married: "M",

  /**
   * Single
   */
  Single: "S",

  /**
   * Widowed
   */
  Widowed: "W",

  /**
   * Common law
   */
  Commonlaw: "C",

  /**
   * Living together
   */
  Livingtogether: "G",

  /**
   * Domestic partner
   */
  Domesticpartner: "P",

  /**
   * Registered domestic partner
   */
  Registereddomesticpartner: "R",

  /**
   * Legally Separated
   */
  LegallySeparated: "E",

  /**
   * Annulled
   */
  Annulled: "N",

  /**
   * Interlocutory
   */
  Interlocutory: "I",

  /**
   * Unmarried
   */
  Unmarried: "B",

  /**
   * Unknown
   */
  Unknown: "U",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unreported
   */
  Unreported: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMaritalStatusCode =
  typeof Hl7VSMaritalStatusCode[keyof typeof Hl7VSMaritalStatusCode];
