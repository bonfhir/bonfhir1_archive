/**
 * Concepts which are used to identify an HL7 version in the Version 2.x family of published standards.
 * http://terminology.hl7.org/ValueSet/v2-0104
 */
export const Hl7VSVersionControlTableCode = {
  /**
   * Release 2.0
   */
  Release20: "2.0",

  /**
   * Demo 2.0
   */
  Demo20: "2.0D",

  /**
   * Release 2.1
   */
  Release21: "2.1",

  /**
   * Release 2.2
   */
  Release22: "2.2",

  /**
   * Release 2.3
   */
  Release23: "2.3",

  /**
   * Release 2.3.1
   */
  Release231: "2.3.1",

  /**
   * Release 2.3.2
   */
  Release232: "2.3.2",

  /**
   * Release 2.4
   */
  Release24: "2.4",

  /**
   * Release 2.5
   */
  Release25: "2.5",

  /**
   * Release 2.5.1
   */
  Release251: "2.5.1",

  /**
   * Release 2.6
   */
  Release26: "2.6",

  /**
   * Release 2.7
   */
  Release27: "2.7",

  /**
   * Release 2.7.1
   */
  Release271: "2.7.1",

  /**
   * Release 2.8
   */
  Release28: "2.8",

  /**
   * Release 2.8.1
   */
  Release281: "2.8.1",

  /**
   * Release 2.8.2
   */
  Release282: "2.8.2",

  /**
   * Draft 2.9
   */
  Draft29: "2.9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVersionControlTableCode =
  typeof Hl7VSVersionControlTableCode[keyof typeof Hl7VSVersionControlTableCode];
