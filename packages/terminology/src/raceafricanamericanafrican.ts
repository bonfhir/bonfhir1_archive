/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAfricanAmericanAfrican
 */
export const RaceAfricanAmericanAfricanCode = {
  /**
   * African
   */
  African: "2060-2",

  /**
   * Botswanan
   */
  Botswanan: "2061-0",

  /**
   * Ethiopian
   */
  Ethiopian: "2062-8",

  /**
   * Liberian
   */
  Liberian: "2063-6",

  /**
   * Namibian
   */
  Namibian: "2064-4",

  /**
   * Nigerian
   */
  Nigerian: "2065-1",

  /**
   * Zairean
   */
  Zairean: "2066-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAfricanAmericanAfricanCode =
  typeof RaceAfricanAmericanAfricanCode[keyof typeof RaceAfricanAmericanAfricanCode];
