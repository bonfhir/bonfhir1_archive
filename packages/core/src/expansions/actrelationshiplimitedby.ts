/**
 * A relationship that limits or restricts the source act by the elements of the target act. For example, an authorization may be limited by a financial amount (up to $500). Target Act must be in EVN.CRIT mood.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipLimitedBy
 */
export const ActRelationshipLimitedByCode = {
  /**
   * limited by
   */
  LIMIT: "LIMIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipLimitedByCode =
  typeof ActRelationshipLimitedByCode[keyof typeof ActRelationshipLimitedByCode];
