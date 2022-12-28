/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipAdjunctCurativeIndication
 */
export const ActRelationshipAdjunctCurativeIndicationCode = {
  /**
   * adjunct curative indication
   */
  "CURE.ADJ": "CURE.ADJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipAdjunctCurativeIndicationCode =
  typeof ActRelationshipAdjunctCurativeIndicationCode[keyof typeof ActRelationshipAdjunctCurativeIndicationCode];
