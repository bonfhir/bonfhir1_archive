/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicCentralAmerican
 */
export const EthnicityHispanicCentralAmericanCode = {
  /**
   * Central American
   */
  CentralAmerican: "2155-0",

  /**
   * Costa Rican
   */
  CostaRican: "2156-8",

  /**
   * Guatemalan
   */
  Guatemalan: "2157-6",

  /**
   * Honduran
   */
  Honduran: "2158-4",

  /**
   * Nicaraguan
   */
  Nicaraguan: "2159-2",

  /**
   * Panamanian
   */
  Panamanian: "2160-0",

  /**
   * Salvadoran
   */
  Salvadoran: "2161-8",

  /**
   * Central American Indian
   */
  CentralAmericanIndian: "2162-6",

  /**
   * Canal Zone
   */
  CanalZone: "2163-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicCentralAmericanCode =
  typeof EthnicityHispanicCentralAmericanCode[keyof typeof EthnicityHispanicCentralAmericanCode];
