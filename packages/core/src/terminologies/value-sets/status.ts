/**
 * The validation status of the target
 * http://hl7.org/fhir/ValueSet/verificationresult-status
 */
export const statusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type statusCode = typeof statusCode[keyof typeof statusCode];
