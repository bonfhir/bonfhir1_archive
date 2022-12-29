/**
 * This value set includes a sample set of Forms codes.
 * http://terminology.hl7.org/ValueSet/forms
 */
export const FormCodesCode = {
  /**
   * Form #1
   */
  Form1: "1",

  /**
   * Form #1
   */
  Form1: "2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FormCodesCode = typeof FormCodesCode[keyof typeof FormCodesCode];
