/**
 * The primary process by which the target is validated
 * http://hl7.org/fhir/ValueSet/verificationresult-validation-process
 */
export const validationprocessCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type validationprocessCode =
  typeof validationprocessCode[keyof typeof validationprocessCode];
