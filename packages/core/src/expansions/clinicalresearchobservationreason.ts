/**
 * **Definition:**SSpecifies the reason that a test was performed or observation collected in a clinical research study.

**Note:**This set of codes are not strictly reasons, but are used in the currently Normative standard. Future revisions of the specification will model these as ActRelationships and thes codes may subsequently be retired. Thus, these codes should not be used for new specifications.
 * http://terminology.hl7.org/ValueSet/v3-ClinicalResearchObservationReason
 */
export const ClinicalResearchObservationReasonCode = {
  /**
   * non-protocol
   */
  NPT: "NPT",

  /**
   * per protocol
   */
  PPT: "PPT",

  /**
   * per definition
   */
  UPT: "UPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalResearchObservationReasonCode =
  typeof ClinicalResearchObservationReasonCode[keyof typeof ClinicalResearchObservationReasonCode];
