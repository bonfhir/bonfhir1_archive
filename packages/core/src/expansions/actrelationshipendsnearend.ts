/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsNearEnd
 */
export const ActRelationshipEndsNearEndCode = {
  /**
   * ends near end
   */
  ENE: "ENE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsNearEndCode =
  typeof ActRelationshipEndsNearEndCode[keyof typeof ActRelationshipEndsNearEndCode];
