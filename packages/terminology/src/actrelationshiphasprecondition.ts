/**
 * A requirement to be true before a service is performed. The target can be any service in criterion mood. For multiple pre-conditions a conjunction attribute (AND, OR, XOR) is applicable.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasPre-condition
 */
export const ActRelationshipHasPreConditionCode = {
  /**
   * has pre-condition
   */
  hasprecondition: "PRCN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasPreConditionCode =
  typeof ActRelationshipHasPreConditionCode[keyof typeof ActRelationshipHasPreConditionCode];
