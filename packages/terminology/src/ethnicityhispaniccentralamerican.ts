/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicCentralAmerican
 */
export const EthnicityHispanicCentralAmericanCode = {
  /**
   * Central American
   */
  "2155-0": "2155-0",

  /**
   * Costa Rican
   */
  "2156-8": "2156-8",

  /**
   * Guatemalan
   */
  "2157-6": "2157-6",

  /**
   * Honduran
   */
  "2158-4": "2158-4",

  /**
   * Nicaraguan
   */
  "2159-2": "2159-2",

  /**
   * Panamanian
   */
  "2160-0": "2160-0",

  /**
   * Salvadoran
   */
  "2161-8": "2161-8",

  /**
   * Central American Indian
   */
  "2162-6": "2162-6",

  /**
   * Canal Zone
   */
  "2163-4": "2163-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicCentralAmericanCode =
  typeof EthnicityHispanicCentralAmericanCode[keyof typeof EthnicityHispanicCentralAmericanCode];
