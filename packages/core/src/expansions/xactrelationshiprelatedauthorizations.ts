/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipRelatedAuthorizations
 */
export const XActRelationshipRelatedAuthorizationsCode = {
  /**
   * authorized by
   */
  AUTH: "AUTH",

  /**
   * refers to
   */
  REFR: "REFR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipRelatedAuthorizationsCode =
  typeof XActRelationshipRelatedAuthorizationsCode[keyof typeof XActRelationshipRelatedAuthorizationsCode];
