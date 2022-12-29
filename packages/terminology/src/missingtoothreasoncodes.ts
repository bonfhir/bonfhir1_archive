/**
 * This value set includes sample Missing Tooth Reason codes.
 * http://terminology.hl7.org/ValueSet/missing-tooth-reason
 */
export const MissingToothReasonCodesCode = {
  /**
   * E
   */
  E: "e",

  /**
   * C
   */
  C: "c",

  /**
   * U
   */
  U: "u",

  /**
   * O
   */
  O: "o",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MissingToothReasonCodesCode =
  typeof MissingToothReasonCodesCode[keyof typeof MissingToothReasonCodesCode];
