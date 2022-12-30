/**
 * A pre-condition that if true should result in the source Act being executed. The target is in typically in criterion mood. When reported after the fact (i.e. the criterion has been met) it may be in Event mood. A delay between the trigger and the triggered action can be specified.

*Discussion:* This includes the concept of a required act for a service or financial instrument such as an insurance plan or policy. In such cases, the trigger is the occurrence of a specific condition such as coverage limits being exceeded.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasTrigger
 */
export const ActRelationshipHasTriggerCode = {
  /**
   * has trigger
   */
  TRIG: "TRIG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasTriggerCode =
  typeof ActRelationshipHasTriggerCode[keyof typeof ActRelationshipHasTriggerCode];
