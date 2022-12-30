/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAfricanAmericanAfrican
 */
export const RaceAfricanAmericanAfricanCode = {
  /**
   * African
   */
  "2060-2": "2060-2",

  /**
   * Botswanan
   */
  "2061-0": "2061-0",

  /**
   * Ethiopian
   */
  "2062-8": "2062-8",

  /**
   * Liberian
   */
  "2063-6": "2063-6",

  /**
   * Namibian
   */
  "2064-4": "2064-4",

  /**
   * Nigerian
   */
  "2065-1": "2065-1",

  /**
   * Zairean
   */
  "2066-9": "2066-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAfricanAmericanAfricanCode =
  typeof RaceAfricanAmericanAfricanCode[keyof typeof RaceAfricanAmericanAfricanCode];
