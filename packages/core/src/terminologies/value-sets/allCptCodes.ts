/**
 * A value set that includes all CPT codes
 * http://hl7.org/fhir/ValueSet/cpt-all
 */
export const AllCPTcodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllCPTcodesCode =
  typeof AllCPTcodesCode[keyof typeof AllCPTcodesCode];
