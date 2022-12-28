/**
 * Value Set of codes that specify an expansion on the original Yes/No indicator table by including "flavors of null".  It is intended to be applied to fields where the response is not limited to "yes" or "no".
 * http://terminology.hl7.org/ValueSet/v2-0532
 */
export const Hl7VSExpandedYesNoIndicatorCode = {
  /**
   * Yes
   */
  Y: "Y",

  /**
   * No
   */
  N: "N",

  /**
   * No Information
   */
  NI: "NI",

  /**
   * not applicable
   */
  NA: "NA",

  /**
   * unknown
   */
  UNK: "UNK",

  /**
   * not asked
   */
  NASK: "NASK",

  /**
   * asked but unknown
   */
  ASKU: "ASKU",

  /**
   * temporarily unavailable
   */
  NAV: "NAV",

  /**
   * not present
   */
  NP: "NP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSExpandedYesNoIndicatorCode =
  typeof Hl7VSExpandedYesNoIndicatorCode[keyof typeof Hl7VSExpandedYesNoIndicatorCode];
