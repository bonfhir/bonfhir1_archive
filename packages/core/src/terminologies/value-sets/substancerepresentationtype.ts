/**
 * The type of a name given to a substance.
 * http://hl7.org/fhir/ValueSet/substance-representation-type
 */
export const SubstanceRepresentationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceRepresentationTypeCode =
  typeof SubstanceRepresentationTypeCode[keyof typeof SubstanceRepresentationTypeCode];
