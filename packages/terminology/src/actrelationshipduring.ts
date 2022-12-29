/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDuring
 */
export const ActRelationshipDuringCode = {
  /**
   * occurs during
   */
  occursduring: "DURING",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipDuringCode =
  typeof ActRelationshipDuringCode[keyof typeof ActRelationshipDuringCode];
