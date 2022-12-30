/**
 * The source act removes or lessens the occurrence or effect of the target act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipMitigates
 */
export const ActRelationshipMitigatesCode = {
  /**
   * mitigates
   */
  MITGT: "MITGT",

  /**
   * recovers
   */
  RCVY: "RCVY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipMitigatesCode =
  typeof ActRelationshipMitigatesCode[keyof typeof ActRelationshipMitigatesCode];
