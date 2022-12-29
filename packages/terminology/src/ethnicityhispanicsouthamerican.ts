/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicSouthAmerican
 */
export const EthnicityHispanicSouthAmericanCode = {
  /**
   * South American
   */
  SouthAmerican: "2165-9",

  /**
   * Argentinean
   */
  Argentinean: "2166-7",

  /**
   * Bolivian
   */
  Bolivian: "2167-5",

  /**
   * Chilean
   */
  Chilean: "2168-3",

  /**
   * Colombian
   */
  Colombian: "2169-1",

  /**
   * Ecuadorian
   */
  Ecuadorian: "2170-9",

  /**
   * Paraguayan
   */
  Paraguayan: "2171-7",

  /**
   * Peruvian
   */
  Peruvian: "2172-5",

  /**
   * Uruguayan
   */
  Uruguayan: "2173-3",

  /**
   * Venezuelan
   */
  Venezuelan: "2174-1",

  /**
   * South American Indian
   */
  SouthAmericanIndian: "2175-8",

  /**
   * Criollo
   */
  Criollo: "2176-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicSouthAmericanCode =
  typeof EthnicityHispanicSouthAmericanCode[keyof typeof EthnicityHispanicSouthAmericanCode];
