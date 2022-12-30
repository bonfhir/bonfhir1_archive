/**
 * The source act is a single occurrence of a repeatable target act. The source and target act can be in any mood on the "completion track" but the source act must be as far as or further along the track than the target act (i.e., the occurrence of an intent can be an event but not vice versa).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipOccurrence
 */
export const ActRelationshipOccurrenceCode = {
  /**
   * occurrence
   */
  OCCR: "OCCR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipOccurrenceCode =
  typeof ActRelationshipOccurrenceCode[keyof typeof ActRelationshipOccurrenceCode];
