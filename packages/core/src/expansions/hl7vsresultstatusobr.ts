/**
 * Concepts which specify a status of results for an order.  Used in HL7 Version 2.x messaging in the OBR segment.
 * http://terminology.hl7.org/ValueSet/v2-0123
 */
export const Hl7VSResultStatusObrCode = {
  /**
   * Order received; specimen not yet received
   */
  O: "O",

  /**
   * No results available; specimen received, procedure incomplete
   */
  I: "I",

  /**
   * No results available; procedure scheduled, but not done
   */
  S: "S",

  /**
   * Some, but not all, results available
   */
  A: "A",

  /**
   * Preliminary
   */
  P: "P",

  /**
   * Corrected, final
   */
  C: "C",

  /**
   * Results stored; not yet verified
   */
  R: "R",

  /**
   * Final results
   */
  F: "F",

  /**
   * No results available; Order canceled
   */
  X: "X",

  /**
   * No order on record for this test
   */
  Y: "Y",

  /**
   * No record of this patient
   */
  Z: "Z",

  /**
   * Corrected, not final
   */
  M: "M",

  /**
   * Procedure completed, results pending
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSResultStatusObrCode =
  typeof Hl7VSResultStatusObrCode[keyof typeof Hl7VSResultStatusObrCode];
