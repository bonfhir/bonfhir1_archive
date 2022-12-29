/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsBeforeOrConcurrentWithEndOf
 */
export const ActRelationshipEndsBeforeOrConcurrentWithEndOfCode = {
  /**
   * ends before or concurrent with end of
   */
  endsbeforeorconcurrentwithendof: "EBEORECW",

  /**
   * ends concurrent with
   */
  endsconcurrentwith: "ECW",

  /**
   * concurrent with
   */
  concurrentwith: "CONCURRENT",

  /**
   * starts before start of, ends with
   */
  startsbeforestartofendswith: "SBSECWE",

  /**
   * ends before end of
   */
  endsbeforeendof: "EBE",

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
export type ActRelationshipEndsBeforeOrConcurrentWithEndOfCode =
  typeof ActRelationshipEndsBeforeOrConcurrentWithEndOfCode[keyof typeof ActRelationshipEndsBeforeOrConcurrentWithEndOfCode];
