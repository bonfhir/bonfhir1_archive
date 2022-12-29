/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeOrConcurrentWithEndOf
 */
export const ActRelationshipStartsBeforeOrConcurrentWithEndOfCode = {
  /**
   * starts before or concurrent with end of
   */
  startsbeforeorconcurrentwithendof: "SBEORSCWE",

  /**
   * overlaps with
   */
  overlapswith: "OVERLAP",

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
   * ends during
   */
  endsduring: "EDU",

  /**
   * contains start of, ends before end of
   */
  containsstartofendsbeforeendof: "SBSEASEBE",

  /**
   * starts with. ends before end of
   */
  startswithendsbeforeendof: "SCWSEBE",

  /**
   * contains end of
   */
  containsendof: "SBEEAE",

  /**
   * start after start of, contains end of
   */
  startafterstartofcontainsendof: "SASSBEEAS",

  /**
   * contains time of
   */
  containstimeof: "SBSEAE",

  /**
   * starts with, ends after end of
   */
  startswithendsafterendof: "SCWSEAE",

  /**
   * contains start of
   */
  containsstartof: "SBSEAS",

  /**
   * starts concurrent with
   */
  startsconcurrentwith: "SCW",

  /**
   * starts concurrent with end of
   */
  startsconcurrentwithendof: "SCWE",

  /**
   * starts during
   */
  startsduring: "SDU",

  /**
   * starts before end of
   */
  startsbeforeendof: "SBE",

  /**
   * ends before end of
   */
  endsbeforeendof: "EBE",

  /**
   * starts before start of, ends before end of
   */
  startsbeforestartofendsbeforeendof: "SBSEBE",

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
   * ends before or concurrent with end of
   */
  endsbeforeorconcurrentwithendof: "EBEORECW",

  /**
   * starts before or concurrent with start of
   */
  startsbeforeorconcurrentwithstartof: "SBSORSCW",

  /**
   * starts before start of
   */
  startsbeforestartof: "SBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeOrConcurrentWithEndOfCode =
  typeof ActRelationshipStartsBeforeOrConcurrentWithEndOfCode[keyof typeof ActRelationshipStartsBeforeOrConcurrentWithEndOfCode];
