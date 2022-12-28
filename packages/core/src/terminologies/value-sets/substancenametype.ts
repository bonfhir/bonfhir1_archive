/**
 * The type of a name given to a substance.
 * http://hl7.org/fhir/ValueSet/substance-name-type
 */
export const SubstanceNameTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceNameTypeCode =
  typeof SubstanceNameTypeCode[keyof typeof SubstanceNameTypeCode];
