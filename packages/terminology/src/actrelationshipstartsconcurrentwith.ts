/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsConcurrentWith
 */
export const ActRelationshipStartsConcurrentWithCode = {
  /**
   * starts concurrent with
   */
  SCW: "SCW",

  /**
   * concurrent with
   */
  CONCURRENT: "CONCURRENT",

  /**
   * starts with. ends before end of
   */
  SCWSEBE: "SCWSEBE",

  /**
   * starts with, ends after end of
   */
  SCWSEAE: "SCWSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsConcurrentWithCode =
  typeof ActRelationshipStartsConcurrentWithCode[keyof typeof ActRelationshipStartsConcurrentWithCode];
