/**
 * Indicates that the target Act provides evidence in support of the action represented by the source Act. The target is not a 'reason' for the source act, but rather gives supporting information on why the source act is an appropriate course of action. Possible targets might be clinical trial results, journal articles, similar successful therapies, etc.

*Rationale:* Provides a mechanism for conveying clinical justification for non-approved or otherwise non-traditional therapies.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipProvidesEvidenceFor
 */
export const ActRelationshipProvidesEvidenceForCode = {
  /**
   * provides evidence for
   */
  providesevidencefor: "EVID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipProvidesEvidenceForCode =
  typeof ActRelationshipProvidesEvidenceForCode[keyof typeof ActRelationshipProvidesEvidenceForCode];
