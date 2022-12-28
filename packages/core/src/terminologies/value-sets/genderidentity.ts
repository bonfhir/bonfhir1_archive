/**
 * This example value set defines a set of codes that can be used to indicate a patient's gender identity.
 * http://hl7.org/fhir/ValueSet/gender-identity
 */
export const GenderIdentityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GenderIdentityCode =
  typeof GenderIdentityCode[keyof typeof GenderIdentityCode];
