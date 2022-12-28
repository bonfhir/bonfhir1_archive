/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EasternApachean
 */
export const EasternApacheanCode = {
  /**
   * Jicarilla
   */
  "x-APJ": "x-APJ",

  /**
   * Lipan
   */
  "x-APL": "x-APL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EasternApacheanCode =
  typeof EasternApacheanCode[keyof typeof EasternApacheanCode];
