/**
 * Supports communication of purpose of use at a general level.
 * http://terminology.hl7.org/ValueSet/v3-GeneralPurposeOfUse
 */
export const GeneralPurposeOfUseCode = {
  /**
   * coverage under policy or program
   */
  COVERAGE: "COVERAGE",

  /**
   * Emergency Treatment
   */
  ETREAT: "ETREAT",

  /**
   * healthcare marketing
   */
  HMARKT: "HMARKT",

  /**
   * healthcare operations
   */
  HOPERAT: "HOPERAT",

  /**
   * healthcare payment
   */
  HPAYMT: "HPAYMT",

  /**
   * healthcare research
   */
  HRESCH: "HRESCH",

  /**
   * patient requested
   */
  PATRQT: "PATRQT",

  /**
   * public health
   */
  PUBHLTH: "PUBHLTH",

  /**
   * treatment
   */
  TREAT: "TREAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneralPurposeOfUseCode =
  typeof GeneralPurposeOfUseCode[keyof typeof GeneralPurposeOfUseCode];
