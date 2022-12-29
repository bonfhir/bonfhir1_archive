/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EasternAlgonquin
 */
export const EasternAlgonquinCode = {
  /**
   * Abenakian
   */
  Abenakian: "_Abenakian",

  /**
   * Eastern Abenaki
   */
  EasternAbenaki: "x-AAQ",

  /**
   * Western Abenaki
   */
  WesternAbenaki: "x-ABE",

  /**
   * Maliseet-Passamaquoddy
   */
  MaliseetPassamaquoddy: "x-MAC",

  /**
   * Delawaran
   */
  Delawaran: "_Delawaran",

  /**
   * Unami Delaware
   */
  UnamiDelaware: "x-DEL",

  /**
   * Micmac
   */
  Micmac: "x-MIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EasternAlgonquinCode =
  typeof EasternAlgonquinCode[keyof typeof EasternAlgonquinCode];
