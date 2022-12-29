/**
 * **Definition:** The source act is performed to recover from the effects of the target act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipRecovery
 */
export const ActRelationshipRecoveryCode = {
  /**
   * recovers
   */
  recovers: "RCVY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipRecoveryCode =
  typeof ActRelationshipRecoveryCode[keyof typeof ActRelationshipRecoveryCode];
