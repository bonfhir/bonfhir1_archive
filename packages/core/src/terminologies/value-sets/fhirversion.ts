/**
 * All published FHIR Versions.
 * http://hl7.org/fhir/ValueSet/FHIR-version
 */
export const FHIRVersionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRVersionCode =
  typeof FHIRVersionCode[keyof typeof FHIRVersionCode];
