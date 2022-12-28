/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-KutchinHan
 */
export const KutchinHanCode = {
  /**
   * Han
   */
  "x-HAA": "x-HAA",

  /**
   * Kutchin
   */
  "x-KUC": "x-KUC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KutchinHanCode = typeof KutchinHanCode[keyof typeof KutchinHanCode];
