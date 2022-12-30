/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsNearStarts
 */
export const ActRelationshipEndsNearStartsCode = {
  /**
   * ends near start
   */
  ENS: "ENS",

  /**
   * ends concurrent with start of
   */
  ECWS: "ECWS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsNearStartsCode =
  typeof ActRelationshipEndsNearStartsCode[keyof typeof ActRelationshipEndsNearStartsCode];
