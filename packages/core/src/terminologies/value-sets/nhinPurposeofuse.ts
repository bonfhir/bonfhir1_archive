/**
 * This value set is suitable for use with the provenance resource. It is derived from, but not compatible with, the HL7 v3 Purpose of use Code system.
 * http://hl7.org/fhir/ValueSet/nhin-purposeofuse
 */
export const NHINPurposeOfUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NHINPurposeOfUseCode =
  typeof NHINPurposeOfUseCode[keyof typeof NHINPurposeOfUseCode];
