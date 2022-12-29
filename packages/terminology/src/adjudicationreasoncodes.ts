/**
 * This value set includes smattering of Adjudication Reason codes.
 * http://terminology.hl7.org/ValueSet/adjudication-reason
 */
export const AdjudicationReasonCodesCode = {
  /**
   * Not covered
   */
  Notcovered: "ar001",

  /**
   * Plan Limit Reached
   */
  PlanLimitReached: "ar002",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationReasonCodesCode =
  typeof AdjudicationReasonCodesCode[keyof typeof AdjudicationReasonCodesCode];
