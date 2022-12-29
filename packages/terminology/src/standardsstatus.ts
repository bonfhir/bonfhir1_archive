/**
 * HL7 Ballot/Standards status of artifact.
 * http://terminology.hl7.org/ValueSet/standards-status
 */
export const StandardsStatusCode = {
  /**
   * Draft
   */
  Draft: "draft",

  /**
   * Normative
   */
  Normative: "normative",

  /**
   * Trial-Use
   */
  TrialUse: "trial-use",

  /**
   * Informative
   */
  Informative: "informative",

  /**
   * Deprecated
   */
  Deprecated: "deprecated",

  /**
   * External
   */
  External: "external",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StandardsStatusCode =
  typeof StandardsStatusCode[keyof typeof StandardsStatusCode];
