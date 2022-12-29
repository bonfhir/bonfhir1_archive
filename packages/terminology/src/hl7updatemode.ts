/**
 * The possible modes of updating that occur when an attribute is received by a system that already contains values for that attribute.
 * http://terminology.hl7.org/ValueSet/v3-HL7UpdateMode
 */
export const HL7UpdateModeCode = {
  /**
   * Add
   */
  Add: "A",

  /**
   * Add or Replace
   */
  AddorReplace: "AR",

  /**
   * Remove
   */
  Remove: "D",

  /**
   * Key
   */
  Key: "K",

  /**
   * No Change
   */
  NoChange: "N",

  /**
   * Replace
   */
  Replace: "R",

  /**
   * Reference
   */
  Reference: "REF",

  /**
   * Unknown
   */
  Unknown: "U",

  /**
   * SetUpdateMode
   */
  SetUpdateMode: "_SetUpdateMode",

  /**
   * Set Add
   */
  SetAdd: "ESA",

  /**
   * Set Add or Change
   */
  SetAddorChange: "ESAC",

  /**
   * Set Change
   */
  SetChange: "ESC",

  /**
   * Set Delete
   */
  SetDelete: "ESD",

  /**
   * Add or Update
   */
  AddorUpdate: "AU",

  /**
   * Ignore
   */
  Ignore: "I",

  /**
   * Verify
   */
  Verify: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7UpdateModeCode =
  typeof HL7UpdateModeCode[keyof typeof HL7UpdateModeCode];
