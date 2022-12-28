/**
 * Type of the validation primary source
 * http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
 */
export const primarysourcetypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type primarysourcetypeCode =
  typeof primarysourcetypeCode[keyof typeof primarysourcetypeCode];
