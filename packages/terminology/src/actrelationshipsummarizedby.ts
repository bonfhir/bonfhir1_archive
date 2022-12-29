/**
 * An act that contains summary values for a list or set of subordinate acts. For example, a summary of transactions for a particular accounting period.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSummarizedBy
 */
export const ActRelationshipSummarizedByCode = {
  /**
   * summarized by
   */
  summarizedby: "SUMM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSummarizedByCode =
  typeof ActRelationshipSummarizedByCode[keyof typeof ActRelationshipSummarizedByCode];
