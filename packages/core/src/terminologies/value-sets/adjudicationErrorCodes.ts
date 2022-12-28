/**
 * This value set includes a smattering of adjudication codes.
 * http://hl7.org/fhir/ValueSet/adjudication-error
 */
export const AdjudicationErrorCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationErrorCodesCode =
  typeof AdjudicationErrorCodesCode[keyof typeof AdjudicationErrorCodesCode];
