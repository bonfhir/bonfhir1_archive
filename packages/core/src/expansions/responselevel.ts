/**
 * Specifies whether a response is expected from the addressee of this interaction and what level of detail that response should include
 * http://terminology.hl7.org/ValueSet/v3-ResponseLevel
 */
export const ResponseLevelCode = {
  /**
   * completion
   */
  C: "C",

  /**
   * detail
   */
  D: "D",

  /**
   * exception
   */
  E: "E",

  /**
   * confirmation
   */
  F: "F",

  /**
   * message-control
   */
  N: "N",

  /**
   * modification
   */
  R: "R",

  /**
   * none
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResponseLevelCode =
  typeof ResponseLevelCode[keyof typeof ResponseLevelCode];
