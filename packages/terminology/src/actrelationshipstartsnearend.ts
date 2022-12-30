/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsNearEnd
 */
export const ActRelationshipStartsNearEndCode = {
  /**
   * starts near end
   */
  SNE: "SNE",

  /**
   * starts concurrent with end of
   */
  SCWE: "SCWE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsNearEndCode =
  typeof ActRelationshipStartsNearEndCode[keyof typeof ActRelationshipStartsNearEndCode];
