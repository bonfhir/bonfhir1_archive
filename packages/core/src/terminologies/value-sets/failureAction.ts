/**
 * The result if validation fails
 * http://hl7.org/fhir/ValueSet/verificationresult-failure-action
 */
export const failureactionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type failureactionCode =
  typeof failureactionCode[keyof typeof failureactionCode];
