/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeOrConcurrentWithStartOf
 */
export const ActRelationshipStartsBeforeOrConcurrentWithStartOfCode = {
  /**
   * starts before or concurrent with start of
   */
  startsbeforeorconcurrentwithstartof: "SBSORSCW",

  /**
   * starts concurrent with
   */
  startsconcurrentwith: "SCW",

  /**
   * concurrent with
   */
  concurrentwith: "CONCURRENT",

  /**
   * starts with. ends before end of
   */
  startswithendsbeforeendof: "SCWSEBE",

  /**
   * starts with, ends after end of
   */
  startswithendsafterendof: "SCWSEAE",

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
export type ActRelationshipStartsBeforeOrConcurrentWithStartOfCode =
  typeof ActRelationshipStartsBeforeOrConcurrentWithStartOfCode[keyof typeof ActRelationshipStartsBeforeOrConcurrentWithStartOfCode];
