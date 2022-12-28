/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipAdjunctMitigation
 */
export const ActRelationshipAdjunctMitigationCode = {
  /**
   * adjunct mitigation
   */
  "MTGT.ADJ": "MTGT.ADJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipAdjunctMitigationCode =
  typeof ActRelationshipAdjunctMitigationCode[keyof typeof ActRelationshipAdjunctMitigationCode];
