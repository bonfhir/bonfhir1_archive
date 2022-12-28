/**
 * This value set includes smattering of Adjudication Reason codes.
 * http://terminology.hl7.org/ValueSet/adjudication-reason
 */
export const AdjudicationReasonCodesCode = {
  /**
   * Not covered
   */
  ar001: "ar001",

  /**
   * Plan Limit Reached
   */
  ar002: "ar002",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationReasonCodesCode =
  typeof AdjudicationReasonCodesCode[keyof typeof AdjudicationReasonCodesCode];
