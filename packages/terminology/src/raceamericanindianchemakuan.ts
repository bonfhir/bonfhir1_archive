/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChemakuan
 */
export const RaceAmericanIndianChemakuanCode = {
  /**
   * Chemakuan
   */
  "1082-7": "1082-7",

  /**
   * Hoh
   */
  "1083-5": "1083-5",

  /**
   * Quileute
   */
  "1084-3": "1084-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChemakuanCode =
  typeof RaceAmericanIndianChemakuanCode[keyof typeof RaceAmericanIndianChemakuanCode];
