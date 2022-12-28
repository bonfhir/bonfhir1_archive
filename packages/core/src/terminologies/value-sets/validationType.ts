/**
 * What the target is validated against
 * http://hl7.org/fhir/ValueSet/verificationresult-validation-type
 */
export const validationtypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type validationtypeCode =
  typeof validationtypeCode[keyof typeof validationtypeCode];
