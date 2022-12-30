/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceBlackOrAfricanAmerican
 */
export const RaceBlackOrAfricanAmericanCode = {
  /**
   * Black or African American
   */
  "2054-5": "2054-5",

  /**
   * Black
   */
  "2056-0": "2056-0",

  /**
   * African American
   */
  "2058-6": "2058-6",

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

  /**
   * Bahamian
   */
  "2067-7": "2067-7",

  /**
   * Barbadian
   */
  "2068-5": "2068-5",

  /**
   * Dominican
   */
  "2069-3": "2069-3",

  /**
   * Dominica Islander
   */
  "2070-1": "2070-1",

  /**
   * Haitian
   */
  "2071-9": "2071-9",

  /**
   * Jamaican
   */
  "2072-7": "2072-7",

  /**
   * Tobagoan
   */
  "2073-5": "2073-5",

  /**
   * Trinidadian
   */
  "2074-3": "2074-3",

  /**
   * West Indian
   */
  "2075-0": "2075-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceBlackOrAfricanAmericanCode =
  typeof RaceBlackOrAfricanAmericanCode[keyof typeof RaceBlackOrAfricanAmericanCode];
