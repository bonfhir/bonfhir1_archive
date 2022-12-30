/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xSUCCREPLPREV
 */
export const XSUCCREPLPREVCode = {
  /**
   * has previous instance
   */
  PREV: "PREV",

  /**
   * replaces
   */
  RPLC: "RPLC",

  /**
   * succeeds
   */
  SUCC: "SUCC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XSUCCREPLPREVCode =
  typeof XSUCCREPLPREVCode[keyof typeof XSUCCREPLPREVCode];
