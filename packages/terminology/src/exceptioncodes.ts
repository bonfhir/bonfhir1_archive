/**
 * This value set includes sample Exception codes.
 * http://terminology.hl7.org/ValueSet/claim-exception
 */
export const ExceptionCodesCode = {
  /**
   * Student (Fulltime)
   */
  student: "student",

  /**
   * Disabled
   */
  disabled: "disabled",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExceptionCodesCode =
  typeof ExceptionCodesCode[keyof typeof ExceptionCodesCode];
