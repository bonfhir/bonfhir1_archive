/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yokutsan
 */
export const YokutsanCode = {
  /**
   * Kings River
   */
  "x-ENH": "x-ENH",

  /**
   * Gashowu
   */
  "x-GSH": "x-GSH",

  /**
   * Poso Creek
   */
  "x-PYL": "x-PYL",

  /**
   * Tule-Kaweah
   */
  "x-TKH": "x-TKH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YokutsanCode = typeof YokutsanCode[keyof typeof YokutsanCode];
