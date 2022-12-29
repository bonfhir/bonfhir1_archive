/**
 * This value set includes sample Exception codes.
 * http://terminology.hl7.org/ValueSet/claim-exception
 */
export const ExceptionCodesCode = {
  /**
   * Student (Fulltime)
   */
  StudentFulltime: "student",

  /**
   * Disabled
   */
  Disabled: "disabled",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExceptionCodesCode =
  typeof ExceptionCodesCode[keyof typeof ExceptionCodesCode];
