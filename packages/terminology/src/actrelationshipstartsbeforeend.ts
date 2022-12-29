/**
 * The source Act starts after the end of the target Act (i.e. if we say "ActOne SBE ActTwo", it means that ActOne starts before the end of ActTwo, therefore ActOne is the source and ActTwo is the target).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeEnd
 */
export const ActRelationshipStartsBeforeEndCode = {
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
   * starts with. ends before end of
   */
  startswithendsbeforeendof: "SCWSEBE",

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
   * starts before or concurrent with start of
   */
  startsbeforeorconcurrentwithstartof: "SBSORSCW",

  /**
   * starts concurrent with
   */
  startsconcurrentwith: "SCW",

  /**
   * starts with, ends after end of
   */
  startswithendsafterendof: "SCWSEAE",

  /**
   * starts before start of
   */
  startsbeforestartof: "SBS",

  /**
   * contains start of
   */
  containsstartof: "SBSEAS",

  /**
   * contains time of
   */
  containstimeof: "SBSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeEndCode =
  typeof ActRelationshipStartsBeforeEndCode[keyof typeof ActRelationshipStartsBeforeEndCode];
