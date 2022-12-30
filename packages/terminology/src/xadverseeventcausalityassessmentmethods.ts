/**
 * Value set provides methods used to assess the causality of adverse events. New codes should not be added to the domain without first checking with its steward - the Regulated Clinical Research Information Management (RCRIM) technical committee.
 * http://terminology.hl7.org/ValueSet/v3-xAdverseEventCausalityAssessmentMethods
 */
export const XAdverseEventCausalityAssessmentMethodsCode = {
  /**
   * algorithm
   */
  ALGM: "ALGM",

  /**
   * bayesian calculation
   */
  BYCL: "BYCL",

  /**
   * global introspection
   */
  GINT: "GINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XAdverseEventCausalityAssessmentMethodsCode =
  typeof XAdverseEventCausalityAssessmentMethodsCode[keyof typeof XAdverseEventCausalityAssessmentMethodsCode];
