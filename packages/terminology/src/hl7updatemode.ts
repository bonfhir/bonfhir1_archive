/**
 * The possible modes of updating that occur when an attribute is received by a system that already contains values for that attribute.
 * http://terminology.hl7.org/ValueSet/v3-HL7UpdateMode
 */
export const HL7UpdateModeCode = {
  /**
   * Add
   */
  A: "A",

  /**
   * Add or Replace
   */
  AR: "AR",

  /**
   * Remove
   */
  D: "D",

  /**
   * Key
   */
  K: "K",

  /**
   * No Change
   */
  N: "N",

  /**
   * Replace
   */
  R: "R",

  /**
   * Reference
   */
  REF: "REF",

  /**
   * Unknown
   */
  U: "U",

  /**
   * SetUpdateMode
   */
  _SetUpdateMode: "_SetUpdateMode",

  /**
   * Set Add
   */
  ESA: "ESA",

  /**
   * Set Add or Change
   */
  ESAC: "ESAC",

  /**
   * Set Change
   */
  ESC: "ESC",

  /**
   * Set Delete
   */
  ESD: "ESD",

  /**
   * Add or Update
   */
  AU: "AU",

  /**
   * Ignore
   */
  I: "I",

  /**
   * Verify
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7UpdateModeCode =
  typeof HL7UpdateModeCode[keyof typeof HL7UpdateModeCode];
