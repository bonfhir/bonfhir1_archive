/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Dakotan
 */
export const DakotanCode = {
  /**
   * Assiniboine
   */
  Assiniboine: "x-ASB",

  /**
   * Dakota
   */
  Dakota: "x-DHG",

  /**
   * Lakota
   */
  Lakota: "x-LKT",

  /**
   * Nakota
   */
  Nakota: "x-NKT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DakotanCode = typeof DakotanCode[keyof typeof DakotanCode];
