/**
 * An observation that should follow or does actually follow as a result or consequence of a condition or action (sometimes called "post-condition".) Target must be an observation as a goal, risk or any criterion. For complex outcomes a conjunction attribute
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipOutcome
 */
export const ActRelationshipOutcomeCode = {
  /**
   * has outcome
   */
  OUTC: "OUTC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipOutcomeCode =
  typeof ActRelationshipOutcomeCode[keyof typeof ActRelationshipOutcomeCode];
