/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsWithEndsAfterEndOf
 */
export const ActRelationshipStartsWithEndsAfterEndOfCode = {
  /**
   * starts with, ends after end of
   */
  SCWSEAE: "SCWSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsWithEndsAfterEndOfCode =
  typeof ActRelationshipStartsWithEndsAfterEndOfCode[keyof typeof ActRelationshipStartsWithEndsAfterEndOfCode];
