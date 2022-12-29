/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Dhegiha
 */
export const DhegihaCode = {
  /**
   * Kansa
   */
  Kansa: "x-KAA",

  /**
   * Omaha-Ponca
   */
  OmahaPonca: "x-OMA",

  /**
   * Osage
   */
  Osage: "x-OSA",

  /**
   * Quapaw
   */
  Quapaw: "x-QUA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DhegihaCode = typeof DhegihaCode[keyof typeof DhegihaCode];
