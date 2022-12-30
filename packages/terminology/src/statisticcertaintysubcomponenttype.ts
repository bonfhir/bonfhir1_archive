/**
 * The subcomponent classification of quality of evidence rating systems.
 * http://terminology.hl7.org/ValueSet/certainty-subcomponent-type
 */
export const StatisticCertaintySubcomponentTypeCode = {
  /**
   * Risk of bias
   */
  RiskOfBias: "RiskOfBias",

  /**
   * Inconsistency
   */
  Inconsistency: "Inconsistency",

  /**
   * Indirectness
   */
  Indirectness: "Indirectness",

  /**
   * Imprecision
   */
  Imprecision: "Imprecision",

  /**
   * Publication bias
   */
  PublicationBias: "PublicationBias",

  /**
   * Dose response gradient
   */
  DoseResponseGradient: "DoseResponseGradient",

  /**
   * Plausible confounding
   */
  PlausibleConfounding: "PlausibleConfounding",

  /**
   * Large effect
   */
  LargeEffect: "LargeEffect",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticCertaintySubcomponentTypeCode =
  typeof StatisticCertaintySubcomponentTypeCode[keyof typeof StatisticCertaintySubcomponentTypeCode];
