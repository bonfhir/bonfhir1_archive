/**
 * The frequency with which the target must be validated
 * http://hl7.org/fhir/ValueSet/verificationresult-need
 */
export const needCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type needCode = typeof needCode[keyof typeof needCode];
