/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeStartOfEndsWith
 */
export const ActRelationshipStartsBeforeStartOfEndsWithCode = {
  /**
   * starts before start of, ends with
   */
  startsbeforestartofendswith: "SBSECWE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeStartOfEndsWithCode =
  typeof ActRelationshipStartsBeforeStartOfEndsWithCode[keyof typeof ActRelationshipStartsBeforeStartOfEndsWithCode];
