/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 * http://hl7.org/fhir/ValueSet/sequence-type
 */
export const sequenceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type sequenceTypeCode =
  typeof sequenceTypeCode[keyof typeof sequenceTypeCode];
