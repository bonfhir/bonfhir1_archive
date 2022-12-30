/**
 * Concepts which are used to identify an HL7 version in the Version 2.x family of published standards.
 * http://terminology.hl7.org/ValueSet/v2-0104
 */
export const Hl7VSVersionControlTableCode = {
  /**
   * Release 2.0
   */
  "2.0": "2.0",

  /**
   * Demo 2.0
   */
  "2.0D": "2.0D",

  /**
   * Release 2.1
   */
  "2.1": "2.1",

  /**
   * Release 2.2
   */
  "2.2": "2.2",

  /**
   * Release 2.3
   */
  "2.3": "2.3",

  /**
   * Release 2.3.1
   */
  "2.3.1": "2.3.1",

  /**
   * Release 2.3.2
   */
  "2.3.2": "2.3.2",

  /**
   * Release 2.4
   */
  "2.4": "2.4",

  /**
   * Release 2.5
   */
  "2.5": "2.5",

  /**
   * Release 2.5.1
   */
  "2.5.1": "2.5.1",

  /**
   * Release 2.6
   */
  "2.6": "2.6",

  /**
   * Release 2.7
   */
  "2.7": "2.7",

  /**
   * Release 2.7.1
   */
  "2.7.1": "2.7.1",

  /**
   * Release 2.8
   */
  "2.8": "2.8",

  /**
   * Release 2.8.1
   */
  "2.8.1": "2.8.1",

  /**
   * Release 2.8.2
   */
  "2.8.2": "2.8.2",

  /**
   * Draft 2.9
   */
  "2.9": "2.9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVersionControlTableCode =
  typeof Hl7VSVersionControlTableCode[keyof typeof Hl7VSVersionControlTableCode];
