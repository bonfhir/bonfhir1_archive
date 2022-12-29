/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartAfterStartOfContainsEndOf
 */
export const ActRelationshipStartAfterStartOfContainsEndOfCode = {
  /**
   * start after start of, contains end of
   */
  startafterstartofcontainsendof: "SASSBEEAS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartAfterStartOfContainsEndOfCode =
  typeof ActRelationshipStartAfterStartOfContainsEndOfCode[keyof typeof ActRelationshipStartAfterStartOfContainsEndOfCode];
