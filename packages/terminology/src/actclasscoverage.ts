/**
 * When used in the EVN mood, this concept means with respect to a covered party:

1.  A health care insurance policy or plan that is contractually binding between two or more parties; or
2.  A health care program, usually administered by government entities, that provides coverage to persons determined eligible under the terms of the program.

 *  When used in the definition (DEF) mood, COV means potential coverage for a patient who may or may not be a covered party.
 *  The concept's meaning is fully specified by the choice of ActCoverageTypeCode (abstract) ActProgramCode or ActInsurancePolicyCode.
 * http://terminology.hl7.org/ValueSet/v3-ActClassCoverage
 */
export const ActClassCoverageCode = {
  /**
   * coverage
   */
  COV: "COV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCoverageCode =
  typeof ActClassCoverageCode[keyof typeof ActClassCoverageCode];
