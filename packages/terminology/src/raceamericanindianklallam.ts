/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianKlallam
 */
export const RaceAmericanIndianKlallamCode = {
  /**
   * Klallam
   */
  Klallam: "1312-8",

  /**
   * Jamestown
   */
  Jamestown: "1313-6",

  /**
   * Lower Elwha
   */
  LowerElwha: "1314-4",

  /**
   * Port Gamble Klallam
   */
  PortGambleKlallam: "1315-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianKlallamCode =
  typeof RaceAmericanIndianKlallamCode[keyof typeof RaceAmericanIndianKlallamCode];
