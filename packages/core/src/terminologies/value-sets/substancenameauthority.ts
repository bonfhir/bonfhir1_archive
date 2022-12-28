/**
 * An authority that officates substance names.
 * http://hl7.org/fhir/ValueSet/substance-name-authority
 */
export const SubstanceNameAuthorityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceNameAuthorityCode =
  typeof SubstanceNameAuthorityCode[keyof typeof SubstanceNameAuthorityCode];
