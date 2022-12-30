/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CodeIsNotValid
 */
export const CodeIsNotValidCode = {
  /**
   * code is not valid
   */
  CODE_INVAL: "CODE_INVAL",

  /**
   * code has been deprecated
   */
  CODE_DEPREC: "CODE_DEPREC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodeIsNotValidCode =
  typeof CodeIsNotValidCode[keyof typeof CodeIsNotValidCode];
