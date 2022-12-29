/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeStartOfEndsBeforeEndOf
 */
export const ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode = {
  /**
   * starts before start of, ends before end of
   */
  startsbeforestartofendsbeforeendof: "SBSEBE",

  /**
   * contains start of, ends before end of
   */
  containsstartofendsbeforeendof: "SBSEASEBE",

  /**
   * ends before or concurrent with start of
   */
  endsbeforeorconcurrentwithstartof: "EBSORECWS",

  /**
   * ends concurrent with start of
   */
  endsconcurrentwithstartof: "ECWS",

  /**
   * ends before start of
   */
  endsbeforestartof: "EBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode =
  typeof ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode[keyof typeof ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode];
