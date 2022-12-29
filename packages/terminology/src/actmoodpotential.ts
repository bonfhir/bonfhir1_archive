/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMoodPotential
 */
export const ActMoodPotentialCode = {
  /**
   * potential
   */
  potential: "_ActMoodPotential",

  /**
   * definition
   */
  definition: "DEF",

  /**
   * permission
   */
  permission: "PERM",

  /**
   * resource slot
   */
  resourceslot: "SLOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodPotentialCode =
  typeof ActMoodPotentialCode[keyof typeof ActMoodPotentialCode];
