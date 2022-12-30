/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChoctaw
 */
export const RaceAmericanIndianChoctawCode = {
  /**
   * Choctaw
   */
  "1155-1": "1155-1",

  /**
   * Clifton Choctaw
   */
  "1156-9": "1156-9",

  /**
   * Jena Choctaw
   */
  "1157-7": "1157-7",

  /**
   * Mississippi Choctaw
   */
  "1158-5": "1158-5",

  /**
   * Mowa Band of Choctaw
   */
  "1159-3": "1159-3",

  /**
   * Oklahoma Choctaw
   */
  "1160-1": "1160-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChoctawCode =
  typeof RaceAmericanIndianChoctawCode[keyof typeof RaceAmericanIndianChoctawCode];
