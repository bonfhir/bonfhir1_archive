/**
 * This value set includes sequence quality standard
 * http://hl7.org/fhir/ValueSet/sequence-quality-standardSequence
 */
export const FDAStandardSequenceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FDAStandardSequenceCode =
  typeof FDAStandardSequenceCode[keyof typeof FDAStandardSequenceCode];
