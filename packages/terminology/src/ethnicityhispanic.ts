/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanic
 */
export const EthnicityHispanicCode = {
  /**
   * Hispanic or Latino
   */
  HispanicorLatino: "2135-2",

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

  /**
   * Mexican
   */
  Mexican: "2148-5",

  /**
   * Mexican American
   */
  MexicanAmerican: "2149-3",

  /**
   * Mexicano
   */
  Mexicano: "2150-1",

  /**
   * Chicano
   */
  Chicano: "2151-9",

  /**
   * La Raza
   */
  LaRaza: "2152-7",

  /**
   * Mexican American Indian
   */
  MexicanAmericanIndian: "2153-5",

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

  /**
   * Latin American
   */
  LatinAmerican: "2178-2",

  /**
   * Puerto Rican
   */
  PuertoRican: "2180-8",

  /**
   * Cuban
   */
  Cuban: "2182-4",

  /**
   * Dominican
   */
  Dominican: "2184-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicCode =
  typeof EthnicityHispanicCode[keyof typeof EthnicityHispanicCode];
