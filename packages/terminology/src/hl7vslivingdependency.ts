/**
 * Value Set of codes identifying specific living conditions (e.g., spouse dependent on patient, walk-up) that are relevant to an evaluation of the patient's healthcare needs.
 * http://terminology.hl7.org/ValueSet/v2-0223
 */
export const Hl7VSLivingDependencyCode = {
  /**
   * Spouse dependent
   */
  Spousedependent: "D",

  /**
   * Spouse Dependent
   */
  SpouseDependent: "S",

  /**
   * Medical Supervision Required
   */
  MedicalSupervisionRequired: "M",

  /**
   * Small Children Dependent
   */
  SmallChildrenDependent: "C",

  /**
   * Walk up
   */
  Walkup: "WU",

  /**
   * Other
   */
  Other: "O",

  /**
   * Common Bath
   */
  CommonBath: "CB",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLivingDependencyCode =
  typeof Hl7VSLivingDependencyCode[keyof typeof Hl7VSLivingDependencyCode];
