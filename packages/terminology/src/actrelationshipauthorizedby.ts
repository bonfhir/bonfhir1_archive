/**
 * A relationship in which the target act authorizes or certifies the source act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipAuthorizedBy
 */
export const ActRelationshipAuthorizedByCode = {
  /**
   * authorized by
   */
  AUTH: "AUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipAuthorizedByCode =
  typeof ActRelationshipAuthorizedByCode[keyof typeof ActRelationshipAuthorizedByCode];
