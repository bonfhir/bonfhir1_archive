/**
 * In the United States, federal standards for classifying data on ethnicity determine the categories used by federal agencies and exert a strong influence on categorization by state and local agencies and private sector organizations. The federal standards do not conceptually define ethnicity, and they recognize the absence of an anthropological or scientific basis for ethnicity classification. Instead, the federal standards acknowledge that ethnicity is a social-political construct in which an individual's own identification with a particular ethnicity is preferred to observer identification. The standards specify two minimum ethnicity categories: Hispanic or Latino, and Not Hispanic or Latino. The standards define a Hispanic or Latino as a person of "Mexican, Puerto Rican, Cuban, South or Central America, or other Spanish culture or origin, regardless of race." The standards stipulate that ethnicity data need not be limited to the two minimum categories, but any expansion must be collapsible to those categories. In addition, the standards stipulate that an individual can be Hispanic or Latino or can be Not Hispanic or Latino, but cannot be both.
 * http://terminology.hl7.org/ValueSet/v3-Ethnicity
 */
export const EthnicityCode = {
  /**
   * Not Hispanic or Latino
   */
  "2186-5": "2186-5",

  /**
   * Hispanic or Latino
   */
  "2135-2": "2135-2",

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

  /**
   * Mexican
   */
  "2148-5": "2148-5",

  /**
   * Mexican American
   */
  "2149-3": "2149-3",

  /**
   * Mexicano
   */
  "2150-1": "2150-1",

  /**
   * Chicano
   */
  "2151-9": "2151-9",

  /**
   * La Raza
   */
  "2152-7": "2152-7",

  /**
   * Mexican American Indian
   */
  "2153-5": "2153-5",

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

  /**
   * Latin American
   */
  "2178-2": "2178-2",

  /**
   * Puerto Rican
   */
  "2180-8": "2180-8",

  /**
   * Cuban
   */
  "2182-4": "2182-4",

  /**
   * Dominican
   */
  "2184-0": "2184-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityCode = typeof EthnicityCode[keyof typeof EthnicityCode];
