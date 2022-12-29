/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCurativeIndication
 */
export const ActRelationshipCurativeIndicationCode = {
  /**
   * curative indication
   */
  curativeindication: "CURE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCurativeIndicationCode =
  typeof ActRelationshipCurativeIndicationCode[keyof typeof ActRelationshipCurativeIndicationCode];
