/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicMexican
 */
export const EthnicityHispanicMexicanCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicMexicanCode =
  typeof EthnicityHispanicMexicanCode[keyof typeof EthnicityHispanicMexicanCode];
