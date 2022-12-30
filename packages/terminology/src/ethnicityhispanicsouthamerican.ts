/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicSouthAmerican
 */
export const EthnicityHispanicSouthAmericanCode = {
  /**
   * South American
   */
  "2165-9": "2165-9",

  /**
   * Argentinean
   */
  "2166-7": "2166-7",

  /**
   * Bolivian
   */
  "2167-5": "2167-5",

  /**
   * Chilean
   */
  "2168-3": "2168-3",

  /**
   * Colombian
   */
  "2169-1": "2169-1",

  /**
   * Ecuadorian
   */
  "2170-9": "2170-9",

  /**
   * Paraguayan
   */
  "2171-7": "2171-7",

  /**
   * Peruvian
   */
  "2172-5": "2172-5",

  /**
   * Uruguayan
   */
  "2173-3": "2173-3",

  /**
   * Venezuelan
   */
  "2174-1": "2174-1",

  /**
   * South American Indian
   */
  "2175-8": "2175-8",

  /**
   * Criollo
   */
  "2176-6": "2176-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicSouthAmericanCode =
  typeof EthnicityHispanicSouthAmericanCode[keyof typeof EthnicityHispanicSouthAmericanCode];
