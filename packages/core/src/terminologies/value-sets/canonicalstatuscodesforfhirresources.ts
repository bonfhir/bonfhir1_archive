/**
 * The master set of status codes used throughout FHIR. All status codes are mapped to one of these codes.
 * http://hl7.org/fhir/ValueSet/resource-status
 */
export const CanonicalStatusCodesForFHIRResourcesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CanonicalStatusCodesForFHIRResourcesCode =
  typeof CanonicalStatusCodesForFHIRResourcesCode[keyof typeof CanonicalStatusCodesForFHIRResourcesCode];
