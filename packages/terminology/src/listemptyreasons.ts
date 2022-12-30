/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 * http://terminology.hl7.org/ValueSet/list-empty-reason
 */
export const ListEmptyReasonsCode = {
  /**
   * Nil Known
   */
  nilknown: "nilknown",

  /**
   * Not Asked
   */
  notasked: "notasked",

  /**
   * Information Withheld
   */
  withheld: "withheld",

  /**
   * Unavailable
   */
  unavailable: "unavailable",

  /**
   * Not Started
   */
  notstarted: "notstarted",

  /**
   * Closed
   */
  closed: "closed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListEmptyReasonsCode =
  typeof ListEmptyReasonsCode[keyof typeof ListEmptyReasonsCode];
