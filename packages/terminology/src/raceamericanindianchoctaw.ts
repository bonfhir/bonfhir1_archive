/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChoctaw
 */
export const RaceAmericanIndianChoctawCode = {
  /**
   * Choctaw
   */
  Choctaw: "1155-1",

  /**
   * Clifton Choctaw
   */
  CliftonChoctaw: "1156-9",

  /**
   * Jena Choctaw
   */
  JenaChoctaw: "1157-7",

  /**
   * Mississippi Choctaw
   */
  MississippiChoctaw: "1158-5",

  /**
   * Mowa Band of Choctaw
   */
  MowaBandofChoctaw: "1159-3",

  /**
   * Oklahoma Choctaw
   */
  OklahomaChoctaw: "1160-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChoctawCode =
  typeof RaceAmericanIndianChoctawCode[keyof typeof RaceAmericanIndianChoctawCode];
