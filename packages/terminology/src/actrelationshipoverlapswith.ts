/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipOverlapsWith
 */
export const ActRelationshipOverlapsWithCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipOverlapsWithCode =
  typeof ActRelationshipOverlapsWithCode[keyof typeof ActRelationshipOverlapsWithCode];
