/**
 * Value Set of codes that describe the impact of an event on a patient.
 * http://terminology.hl7.org/ValueSet/v2-0240
 */
export const Hl7VSEventConsequenceCode = {
  /**
   * Death
   */
  D: "D",

  /**
   * Life threatening
   */
  L: "L",

  /**
   * Caused hospitalized
   */
  H: "H",

  /**
   * Prolonged hospitalization
   */
  P: "P",

  /**
   * Congenital anomaly/birth defect
   */
  C: "C",

  /**
   * Incapacity which is significant, persistent or permanent
   */
  I: "I",

  /**
   * Disability which is significant, persistent or permanent
   */
  J: "J",

  /**
   * Required intervention to prevent permanent impairment/damage
   */
  R: "R",

  /**
   * Other
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventConsequenceCode =
  typeof Hl7VSEventConsequenceCode[keyof typeof Hl7VSEventConsequenceCode];
