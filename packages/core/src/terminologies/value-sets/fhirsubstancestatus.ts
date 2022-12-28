/**
 * A code to indicate if the substance is actively used.
 * http://hl7.org/fhir/ValueSet/substance-status
 */
export const FHIRSubstanceStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRSubstanceStatusCode =
  typeof FHIRSubstanceStatusCode[keyof typeof FHIRSubstanceStatusCode];
