/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicSpaniard
 */
export const EthnicityHispanicSpaniardCode = {
  /**
   * Spaniard
   */
  "2137-8": "2137-8",

  /**
   * Andalusian
   */
  "2138-6": "2138-6",

  /**
   * Asturian
   */
  "2139-4": "2139-4",

  /**
   * Castillian
   */
  "2140-2": "2140-2",

  /**
   * Catalonian
   */
  "2141-0": "2141-0",

  /**
   * Belearic Islander
   */
  "2142-8": "2142-8",

  /**
   * Gallego
   */
  "2143-6": "2143-6",

  /**
   * Valencian
   */
  "2144-4": "2144-4",

  /**
   * Canarian
   */
  "2145-1": "2145-1",

  /**
   * Spanish Basque
   */
  "2146-9": "2146-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicSpaniardCode =
  typeof EthnicityHispanicSpaniardCode[keyof typeof EthnicityHispanicSpaniardCode];
