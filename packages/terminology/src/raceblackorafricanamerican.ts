/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceBlackOrAfricanAmerican
 */
export const RaceBlackOrAfricanAmericanCode = {
  /**
   * Black or African American
   */
  BlackorAfricanAmerican: "2054-5",

  /**
   * Black
   */
  Black: "2056-0",

  /**
   * African American
   */
  AfricanAmerican: "2058-6",

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

  /**
   * Bahamian
   */
  Bahamian: "2067-7",

  /**
   * Barbadian
   */
  Barbadian: "2068-5",

  /**
   * Dominican
   */
  Dominican: "2069-3",

  /**
   * Dominica Islander
   */
  DominicaIslander: "2070-1",

  /**
   * Haitian
   */
  Haitian: "2071-9",

  /**
   * Jamaican
   */
  Jamaican: "2072-7",

  /**
   * Tobagoan
   */
  Tobagoan: "2073-5",

  /**
   * Trinidadian
   */
  Trinidadian: "2074-3",

  /**
   * West Indian
   */
  WestIndian: "2075-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceBlackOrAfricanAmericanCode =
  typeof RaceBlackOrAfricanAmericanCode[keyof typeof RaceBlackOrAfricanAmericanCode];
