/**
 * A contraindication is just a negation of a reason, i.e. it gives a condition under which the action is not to be done. Both, source and target can be any kind of service; target service is in criterion mood. How the strength of a contraindication is expressed (e.g., relative, absolute) is left as an open issue. The priorityNumber attribute could be used.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasContra-indication
 */
export const ActRelationshipHasContraIndicationCode = {
  /**
   * has contra-indication
   */
  CIND: "CIND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasContraIndicationCode =
  typeof ActRelationshipHasContraIndicationCode[keyof typeof ActRelationshipHasContraIndicationCode];
