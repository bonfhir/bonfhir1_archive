/**
 * Value Set of codes identifying specific living conditions (e.g., spouse dependent on patient, walk-up) that are relevant to an evaluation of the patient's healthcare needs.
 * http://terminology.hl7.org/ValueSet/v2-0223
 */
export const Hl7VSLivingDependencyCode = {
  /**
   * Spouse dependent
   */
  D: "D",

  /**
   * Spouse Dependent
   */
  S: "S",

  /**
   * Medical Supervision Required
   */
  M: "M",

  /**
   * Small Children Dependent
   */
  C: "C",

  /**
   * Walk up
   */
  WU: "WU",

  /**
   * Other
   */
  O: "O",

  /**
   * Common Bath
   */
  CB: "CB",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLivingDependencyCode =
  typeof Hl7VSLivingDependencyCode[keyof typeof Hl7VSLivingDependencyCode];
