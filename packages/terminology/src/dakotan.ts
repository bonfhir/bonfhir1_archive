/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Dakotan
 */
export const DakotanCode = {
  /**
   * Assiniboine
   */
  "x-ASB": "x-ASB",

  /**
   * Dakota
   */
  "x-DHG": "x-DHG",

  /**
   * Lakota
   */
  "x-LKT": "x-LKT",

  /**
   * Nakota
   */
  "x-NKT": "x-NKT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DakotanCode = typeof DakotanCode[keyof typeof DakotanCode];
