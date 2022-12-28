/**
 * This value set includes sequence quality method
 * http://hl7.org/fhir/ValueSet/sequence-quality-method
 */
export const FDAMethodCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FDAMethodCode = typeof FDAMethodCode[keyof typeof FDAMethodCode];
