/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianKlallam
 */
export const RaceAmericanIndianKlallamCode = {
  /**
   * Klallam
   */
  "1312-8": "1312-8",

  /**
   * Jamestown
   */
  "1313-6": "1313-6",

  /**
   * Lower Elwha
   */
  "1314-4": "1314-4",

  /**
   * Port Gamble Klallam
   */
  "1315-1": "1315-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianKlallamCode =
  typeof RaceAmericanIndianKlallamCode[keyof typeof RaceAmericanIndianKlallamCode];
