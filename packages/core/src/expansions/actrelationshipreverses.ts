/**
 * A relationship between a source Act that seeks to reverse or undo the action of the prior target Act.

Example: A posted financial transaction (e.g., a debit transaction) was applied in error and must be reversed (e.g., by a credit transaction) the credit transaction is identified as an undo (or reversal) of the prior target transaction.

Constraints: the "completion track" mood of the target Act must be equally or more "actual" than the source act. I.e., when the target act is EVN the source act can be EVN, or any INT. If the target act is INT, the source act can be INT.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipReverses
 */
export const ActRelationshipReversesCode = {
  /**
   * reverses
   */
  REV: "REV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipReversesCode =
  typeof ActRelationshipReversesCode[keyof typeof ActRelationshipReversesCode];
