/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMoodPotential
 */
export const ActMoodPotentialCode = {
  /**
   * potential
   */
  _ActMoodPotential: "_ActMoodPotential",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodPotentialCode =
  typeof ActMoodPotentialCode[keyof typeof ActMoodPotentialCode];
