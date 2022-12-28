/**
 * This value set includes smattering of Adjudication Reason codes.
 * http://hl7.org/fhir/ValueSet/adjudication-reason
 */
export const AdjudicationReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationReasonCodesCode =
  typeof AdjudicationReasonCodesCode[keyof typeof AdjudicationReasonCodesCode];
