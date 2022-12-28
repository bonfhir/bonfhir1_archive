/**
 * A single value set for all security labels defined by FHIR.
 * http://hl7.org/fhir/ValueSet/security-labels
 */
export const AllSecurityLabelsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllSecurityLabelsCode =
  typeof AllSecurityLabelsCode[keyof typeof AllSecurityLabelsCode];
