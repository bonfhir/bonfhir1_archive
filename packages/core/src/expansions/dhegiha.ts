/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Dhegiha
 */
export const DhegihaCode = {
  /**
   * Kansa
   */
  "x-KAA": "x-KAA",

  /**
   * Omaha-Ponca
   */
  "x-OMA": "x-OMA",

  /**
   * Osage
   */
  "x-OSA": "x-OSA",

  /**
   * Quapaw
   */
  "x-QUA": "x-QUA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DhegihaCode = typeof DhegihaCode[keyof typeof DhegihaCode];
