/**
 * An assertion that a new observation was assumed to be the cause for another existing observation. The assumption is attributed to the same actor who asserts the observation. This is stronger and more specific than the support link. For example, a growth of Staphylococcus aureus may be considered the cause of an abscess. The source (cause) is typically an observation, but may be any service, while the target must be an observation.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipIsEtiologyFor
 */
export const ActRelationshipIsEtiologyForCode = {
  /**
   * is etiology for
   */
  CAUS: "CAUS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipIsEtiologyForCode =
  typeof ActRelationshipIsEtiologyForCode[keyof typeof ActRelationshipIsEtiologyForCode];
