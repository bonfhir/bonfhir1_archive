/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EasternApachean
 */
export const EasternApacheanCode = {
  /**
   * Jicarilla
   */
  Jicarilla: "x-APJ",

  /**
   * Lipan
   */
  Lipan: "x-APL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EasternApacheanCode =
  typeof EasternApacheanCode[keyof typeof EasternApacheanCode];
