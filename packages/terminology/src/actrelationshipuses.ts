/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipUses
 */
export const ActRelationshipUsesCode = {
  /**
   * uses
   */
  USE: "USE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipUsesCode =
  typeof ActRelationshipUsesCode[keyof typeof ActRelationshipUsesCode];
