/**
 * Status of the validation of the target against the primary source
 * http://hl7.org/fhir/ValueSet/verificationresult-validation-status
 */
export const validationstatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type validationstatusCode =
  typeof validationstatusCode[keyof typeof validationstatusCode];
