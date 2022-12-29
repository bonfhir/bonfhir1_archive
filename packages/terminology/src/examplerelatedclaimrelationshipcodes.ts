/**
 * This value set includes sample Related Claim Relationship codes.
 * http://terminology.hl7.org/ValueSet/related-claim-relationship
 */
export const ExampleRelatedClaimRelationshipCodesCode = {
  /**
   * Prior Claim
   */
  PriorClaim: "prior",

  /**
   * Associated Claim
   */
  AssociatedClaim: "associated",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleRelatedClaimRelationshipCodesCode =
  typeof ExampleRelatedClaimRelationshipCodesCode[keyof typeof ExampleRelatedClaimRelationshipCodesCode];
