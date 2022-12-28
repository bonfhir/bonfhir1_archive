/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 * http://hl7.org/fhir/ValueSet/synthesis-type
 */
export const SynthesisTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SynthesisTypeCode =
  typeof SynthesisTypeCode[keyof typeof SynthesisTypeCode];
