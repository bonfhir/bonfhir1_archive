/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EasternAlgonquin
 */
export const EasternAlgonquinCode = {
  /**
   * Abenakian
   */
  _Abenakian: "_Abenakian",

  /**
   * Eastern Abenaki
   */
  "x-AAQ": "x-AAQ",

  /**
   * Western Abenaki
   */
  "x-ABE": "x-ABE",

  /**
   * Maliseet-Passamaquoddy
   */
  "x-MAC": "x-MAC",

  /**
   * Delawaran
   */
  _Delawaran: "_Delawaran",

  /**
   * Unami Delaware
   */
  "x-DEL": "x-DEL",

  /**
   * Micmac
   */
  "x-MIC": "x-MIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EasternAlgonquinCode =
  typeof EasternAlgonquinCode[keyof typeof EasternAlgonquinCode];
