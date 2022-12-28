/**
 * This value set includes a sample set of Forms codes.
 * http://hl7.org/fhir/ValueSet/forms
 */
export const FormCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FormCodesCode = typeof FormCodesCode[keyof typeof FormCodesCode];
