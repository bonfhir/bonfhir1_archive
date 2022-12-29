/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Ojibwayan
 */
export const OjibwayanCode = {
  /**
   * Southern Ojibwa
   */
  SouthernOjibwa: "x-OJB",

  /**
   * Potawatami
   */
  Potawatami: "x-POT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OjibwayanCode = typeof OjibwayanCode[keyof typeof OjibwayanCode];
