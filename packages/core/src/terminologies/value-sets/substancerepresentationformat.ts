/**
 * A format of a substance representation.
 * http://hl7.org/fhir/ValueSet/substance-representation-format
 */
export const SubstanceRepresentationFormatCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceRepresentationFormatCode =
  typeof SubstanceRepresentationFormatCode[keyof typeof SubstanceRepresentationFormatCode];
