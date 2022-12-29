/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicSpaniard
 */
export const EthnicityHispanicSpaniardCode = {
  /**
   * Spaniard
   */
  Spaniard: "2137-8",

  /**
   * Andalusian
   */
  Andalusian: "2138-6",

  /**
   * Asturian
   */
  Asturian: "2139-4",

  /**
   * Castillian
   */
  Castillian: "2140-2",

  /**
   * Catalonian
   */
  Catalonian: "2141-0",

  /**
   * Belearic Islander
   */
  BelearicIslander: "2142-8",

  /**
   * Gallego
   */
  Gallego: "2143-6",

  /**
   * Valencian
   */
  Valencian: "2144-4",

  /**
   * Canarian
   */
  Canarian: "2145-1",

  /**
   * Spanish Basque
   */
  SpanishBasque: "2146-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicSpaniardCode =
  typeof EthnicityHispanicSpaniardCode[keyof typeof EthnicityHispanicSpaniardCode];
