/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsWithEndsBeforeEndOf
 */
export const ActRelationshipStartsWithEndsBeforeEndOfCode = {
  /**
   * starts with. ends before end of
   */
  startswithendsbeforeendof: "SCWSEBE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsWithEndsBeforeEndOfCode =
  typeof ActRelationshipStartsWithEndsBeforeEndOfCode[keyof typeof ActRelationshipStartsWithEndsBeforeEndOfCode];
