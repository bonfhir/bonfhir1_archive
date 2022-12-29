/**
 * The source Act starts when the target act ends (i.e. if we say "ActOne SCWE ActTwo", it means that ActOne starts when ActTwo ends, therefore ActOne is the source and ActTwo is the target).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsConcurrentWithEnd
 */
export const ActRelationshipStartsConcurrentWithEndCode = {
  /**
   * starts concurrent with end of
   */
  startsconcurrentwithendof: "SCWE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsConcurrentWithEndCode =
  typeof ActRelationshipStartsConcurrentWithEndCode[keyof typeof ActRelationshipStartsConcurrentWithEndCode];
