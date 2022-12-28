/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipExacerbatredBy
 */
export const ActRelationshipExacerbatredByCode = {
  /**
   * exacerbated by
   */
  EXACBY: "EXACBY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipExacerbatredByCode =
  typeof ActRelationshipExacerbatredByCode[keyof typeof ActRelationshipExacerbatredByCode];
