/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsConcurrentWith
 */
export const ActRelationshipEndsConcurrentWithCode = {
  /**
   * ends concurrent with
   */
  ECW: "ECW",

  /**
   * concurrent with
   */
  CONCURRENT: "CONCURRENT",

  /**
   * starts before start of, ends with
   */
  SBSECWE: "SBSECWE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsConcurrentWithCode =
  typeof ActRelationshipEndsConcurrentWithCode[keyof typeof ActRelationshipEndsConcurrentWithCode];
