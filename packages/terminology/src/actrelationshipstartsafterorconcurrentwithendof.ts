/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsAfterOrConcurrentWithEndOf
 */
export const ActRelationshipStartsAfterOrConcurrentWithEndOfCode = {
  /**
   * starts after or concurrent with end of
   */
  startsafterorconcurrentwithendof: "SAEORSCWE",

  /**
   * starts concurrent with end of
   */
  startsconcurrentwithendof: "SCWE",

  /**
   * starts after end of
   */
  startsafterendof: "SAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsAfterOrConcurrentWithEndOfCode =
  typeof ActRelationshipStartsAfterOrConcurrentWithEndOfCode[keyof typeof ActRelationshipStartsAfterOrConcurrentWithEndOfCode];
