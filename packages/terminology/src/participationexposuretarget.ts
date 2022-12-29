/**
 * **Description:** The entity playing the associated role is the target (contact) of exposure.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationExposuretarget
 */
export const ParticipationExposuretargetCode = {
  /**
   * ExposureTarget
   */
  ExposureTarget: "EXPTRGT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationExposuretargetCode =
  typeof ParticipationExposuretargetCode[keyof typeof ParticipationExposuretargetCode];
