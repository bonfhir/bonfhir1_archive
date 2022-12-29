/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeStartOf
 */
export const ActRelationshipStartsBeforeStartOfCode = {
  /**
   * starts before start of
   */
  startsbeforestartof: "SBS",

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

  /**
   * contains start of
   */
  containsstartof: "SBSEAS",

  /**
   * starts before start of, ends with
   */
  startsbeforestartofendswith: "SBSECWE",

  /**
   * contains time of
   */
  containstimeof: "SBSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeStartOfCode =
  typeof ActRelationshipStartsBeforeStartOfCode[keyof typeof ActRelationshipStartsBeforeStartOfCode];
