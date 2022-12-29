/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsBeforeStartOf
 */
export const ActRelationshipEndsBeforeStartOfCode = {
  /**
   * ends before start of
   */
  endsbeforestartof: "EBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsBeforeStartOfCode =
  typeof ActRelationshipEndsBeforeStartOfCode[keyof typeof ActRelationshipEndsBeforeStartOfCode];
