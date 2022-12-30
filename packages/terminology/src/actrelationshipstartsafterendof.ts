/**
 * **Description:**A relationship in which the target act takes place with a defined temporal relationship with respect to the time at which the source act terminates.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsAfterEndOf
 */
export const ActRelationshipStartsAfterEndOfCode = {
  /**
   * starts after end of
   */
  SAE: "SAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsAfterEndOfCode =
  typeof ActRelationshipStartsAfterEndOfCode[keyof typeof ActRelationshipStartsAfterEndOfCode];
