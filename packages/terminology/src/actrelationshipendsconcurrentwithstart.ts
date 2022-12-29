/**
 * The source Act ends when the target act starts (i.e. if we say "ActOne ECWS ActTwo", it means that ActOne ends when ActTwo starts, therefore ActOne is the source and ActTwo is the target).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsConcurrentWithStart
 */
export const ActRelationshipEndsConcurrentWithStartCode = {
  /**
   * ends concurrent with start of
   */
  endsconcurrentwithstartof: "ECWS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsConcurrentWithStartCode =
  typeof ActRelationshipEndsConcurrentWithStartCode[keyof typeof ActRelationshipEndsConcurrentWithStartCode];
