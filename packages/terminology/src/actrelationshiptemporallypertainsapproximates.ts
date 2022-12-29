/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipTemporallyPertainsApproximates
 */
export const ActRelationshipTemporallyPertainsApproximatesCode = {
  /**
   * ActRelationshipTemporallyPertainsApproximates
   */
  ActRelationshipTemporallyPertainsApproximates:
    "_ActRelationshipTemporallyPertainsApproximates",

  /**
   * ends near end
   */
  endsnearend: "ENE",

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
   * ends near start
   */
  endsnearstart: "ENS",

  /**
   * ends concurrent with start of
   */
  endsconcurrentwithstartof: "ECWS",

  /**
   * starts near end
   */
  startsnearend: "SNE",

  /**
   * starts concurrent with end of
   */
  startsconcurrentwithendof: "SCWE",

  /**
   * starts near start
   */
  startsnearstart: "SNS",

  /**
   * starts concurrent with
   */
  startsconcurrentwith: "SCW",

  /**
   * starts with. ends before end of
   */
  startswithendsbeforeendof: "SCWSEBE",

  /**
   * starts with, ends after end of
   */
  startswithendsafterendof: "SCWSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTemporallyPertainsApproximatesCode =
  typeof ActRelationshipTemporallyPertainsApproximatesCode[keyof typeof ActRelationshipTemporallyPertainsApproximatesCode];
