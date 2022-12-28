/**
 * This value set includes sample Missing Tooth Reason codes.
 * http://terminology.hl7.org/ValueSet/missing-tooth-reason
 */
export const MissingToothReasonCodesCode = {
  /**
   * E
   */
  e: "e",

  /**
   * C
   */
  c: "c",

  /**
   * U
   */
  u: "u",

  /**
   * O
   */
  o: "o",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MissingToothReasonCodesCode =
  typeof MissingToothReasonCodesCode[keyof typeof MissingToothReasonCodesCode];
