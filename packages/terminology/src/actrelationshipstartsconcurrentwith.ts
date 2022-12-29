/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsConcurrentWith
 */
export const ActRelationshipStartsConcurrentWithCode = {
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
export type ActRelationshipStartsConcurrentWithCode =
  typeof ActRelationshipStartsConcurrentWithCode[keyof typeof ActRelationshipStartsConcurrentWithCode];
