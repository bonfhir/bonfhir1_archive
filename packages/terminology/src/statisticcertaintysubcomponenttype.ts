/**
 * The subcomponent classification of quality of evidence rating systems.
 * http://terminology.hl7.org/ValueSet/certainty-subcomponent-type
 */
export const StatisticCertaintySubcomponentTypeCode = {
  /**
   * Risk of bias
   */
  Riskofbias: "RiskOfBias",

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
  Publicationbias: "PublicationBias",

  /**
   * Dose response gradient
   */
  Doseresponsegradient: "DoseResponseGradient",

  /**
   * Plausible confounding
   */
  Plausibleconfounding: "PlausibleConfounding",

  /**
   * Large effect
   */
  Largeeffect: "LargeEffect",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticCertaintySubcomponentTypeCode =
  typeof StatisticCertaintySubcomponentTypeCode[keyof typeof StatisticCertaintySubcomponentTypeCode];
