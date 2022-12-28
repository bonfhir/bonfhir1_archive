/**
 * The source act fulfills (in whole or in part) the target act. Source act must be in a mood equal or more actual than the target act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipFulfills
 */
export const ActRelationshipFulfillsCode = {
  /**
   * fulfills
   */
  FLFS: "FLFS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipFulfillsCode =
  typeof ActRelationshipFulfillsCode[keyof typeof ActRelationshipFulfillsCode];
