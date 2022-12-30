/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianMaidu
 */
export const RaceAmericanIndianMaiduCode = {
  /**
   * Maidu
   */
  "1344-1": "1344-1",

  /**
   * Mountain Maidu
   */
  "1345-8": "1345-8",

  /**
   * Nishinam
   */
  "1346-6": "1346-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianMaiduCode =
  typeof RaceAmericanIndianMaiduCode[keyof typeof RaceAmericanIndianMaiduCode];
