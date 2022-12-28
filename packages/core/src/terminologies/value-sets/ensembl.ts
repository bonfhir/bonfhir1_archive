/**
 * This value set includes all Reference codes
 * http://hl7.org/fhir/ValueSet/sequence-referenceSeq
 */
export const ENSEMBLCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ENSEMBLCode = typeof ENSEMBLCode[keyof typeof ENSEMBLCode];
