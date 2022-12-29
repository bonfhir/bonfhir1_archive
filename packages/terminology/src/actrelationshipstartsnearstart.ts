/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsNearStart
 */
export const ActRelationshipStartsNearStartCode = {
  /**
   * starts near start
   */
  startsnearstart: "SNS",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsNearStartCode =
  typeof ActRelationshipStartsNearStartCode[keyof typeof ActRelationshipStartsNearStartCode];
