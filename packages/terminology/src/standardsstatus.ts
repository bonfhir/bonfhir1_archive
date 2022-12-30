/**
 * HL7 Ballot/Standards status of artifact.
 * http://terminology.hl7.org/ValueSet/standards-status
 */
export const StandardsStatusCode = {
  /**
   * Draft
   */
  draft: "draft",

  /**
   * Normative
   */
  normative: "normative",

  /**
   * Trial-Use
   */
  "trial-use": "trial-use",

  /**
   * Informative
   */
  informative: "informative",

  /**
   * Deprecated
   */
  deprecated: "deprecated",

  /**
   * External
   */
  external: "external",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StandardsStatusCode =
  typeof StandardsStatusCode[keyof typeof StandardsStatusCode];
