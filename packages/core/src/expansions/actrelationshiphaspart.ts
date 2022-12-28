/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasPart
 */
export const ActRelationshipHasPartCode = {
  /**
   * has part
   */
  PART: "PART",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasPartCode =
  typeof ActRelationshipHasPartCode[keyof typeof ActRelationshipHasPartCode];
