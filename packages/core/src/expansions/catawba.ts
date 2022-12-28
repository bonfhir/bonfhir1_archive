/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Catawba
 */
export const CatawbaCode = {
  /**
   * Catawba
   */
  "1076-9": "1076-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CatawbaCode = typeof CatawbaCode[keyof typeof CatawbaCode];
