/**
 * The reason or rationale for a service. A reason link is weaker than a trigger, it only suggests that some service may be or might have been a reason for some action, but not that this reason requires/required the action to be taken. Also, as opposed to the trigger, there is no strong timely relation between the reason and the action.

*Discussion:* In prior releases, the code "SUGG" (suggests) was expressed as "an inversion of the reason link." That code has been retired in favor of the inversion indicator that is an attribute of ActRelationship.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipReason
 */
export const ActRelationshipReasonCode = {
  /**
   * has reason
   */
  RSON: "RSON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipReasonCode =
  typeof ActRelationshipReasonCode[keyof typeof ActRelationshipReasonCode];
