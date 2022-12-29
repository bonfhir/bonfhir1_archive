/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipContainsStartOfEndsBeforeEndOf
 */
export const ActRelationshipContainsStartOfEndsBeforeEndOfCode = {
  /**
   * contains start of, ends before end of
   */
  containsstartofendsbeforeendof: "SBSEASEBE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipContainsStartOfEndsBeforeEndOfCode =
  typeof ActRelationshipContainsStartOfEndsBeforeEndOfCode[keyof typeof ActRelationshipContainsStartOfEndsBeforeEndOfCode];
