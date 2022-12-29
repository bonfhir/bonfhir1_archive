/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActReplaceOrRevise
 */
export const XActReplaceOrReviseCode = {
  /**
   * modifies
   */
  modifies: "MOD",

  /**
   * replaces
   */
  replaces: "RPLC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActReplaceOrReviseCode =
  typeof XActReplaceOrReviseCode[keyof typeof XActReplaceOrReviseCode];
