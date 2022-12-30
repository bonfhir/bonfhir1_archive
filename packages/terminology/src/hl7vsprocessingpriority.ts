/**
 * Value Set of codes that specify one or more available priorities for performing the observation or test.
 * http://terminology.hl7.org/ValueSet/v2-0168
 */
export const Hl7VSProcessingPriorityCode = {
  /**
   * Stat (do immediately)
   */
  S: "S",

  /**
   * As soon as possible (a priority lower than stat)
   */
  A: "A",

  /**
   * Routine
   */
  R: "R",

  /**
   * Preoperative (to be done prior to surgery)
   */
  P: "P",

  /**
   * Timing critical (do as near as possible to requested time)
   */
  T: "T",

  /**
   * Measure continuously (e.g., arterial line blood pressure)
   */
  C: "C",

  /**
   * Do at bedside or portable (may be used with other codes)
   */
  B: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessingPriorityCode =
  typeof Hl7VSProcessingPriorityCode[keyof typeof Hl7VSProcessingPriorityCode];
