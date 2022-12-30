/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicMexican
 */
export const EthnicityHispanicMexicanCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicMexicanCode =
  typeof EthnicityHispanicMexicanCode[keyof typeof EthnicityHispanicMexicanCode];
