/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsAfterOrConcurrentWithStartOf
 */
export const ActRelationshipEndsAfterOrConcurrentWithStartOfCode = {
  /**
   * ends after or concurrent with start of
   */
  endsafterorconcurrentwithstartof: "EASORECWS",

  /**
   * ends after start of
   */
  endsafterstartof: "EAS",

  /**
   * ends after end of
   */
  endsafterendof: "EAE",

  /**
   * starts after start of, ends after end of
   */
  startsafterstartofendsafterendof: "SASEAE",

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
   * starts after start of
   */
  startsafterstartof: "SAS",

  /**
   * starts after end of
   */
  startsafterendof: "SAE",

  /**
   * occurs during
   */
  occursduring: "DURING",

  /**
   * starts after start of, ends with
   */
  startsafterstartofendswith: "SASECWE",

  /**
   * ends after or concurrent with end of
   */
  endsafterorconcurrentwithendof: "EAEORECW",

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
   * ends concurrent with start of
   */
  endsconcurrentwithstartof: "ECWS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsAfterOrConcurrentWithStartOfCode =
  typeof ActRelationshipEndsAfterOrConcurrentWithStartOfCode[keyof typeof ActRelationshipEndsAfterOrConcurrentWithStartOfCode];
