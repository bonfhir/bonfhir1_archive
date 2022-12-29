/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 * http://terminology.hl7.org/ValueSet/list-empty-reason
 */
export const ListEmptyReasonsCode = {
  /**
   * Nil Known
   */
  NilKnown: "nilknown",

  /**
   * Not Asked
   */
  NotAsked: "notasked",

  /**
   * Information Withheld
   */
  InformationWithheld: "withheld",

  /**
   * Unavailable
   */
  Unavailable: "unavailable",

  /**
   * Not Started
   */
  NotStarted: "notstarted",

  /**
   * Closed
   */
  Closed: "closed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListEmptyReasonsCode =
  typeof ListEmptyReasonsCode[keyof typeof ListEmptyReasonsCode];
