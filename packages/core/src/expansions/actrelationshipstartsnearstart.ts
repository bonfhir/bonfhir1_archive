/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsNearStart
 */
export const ActRelationshipStartsNearStartCode = {
  /**
   * starts near start
   */
  SNS: "SNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsNearStartCode =
  typeof ActRelationshipStartsNearStartCode[keyof typeof ActRelationshipStartsNearStartCode];
