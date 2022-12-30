/**
 * **Description:**The entity playing the associated role is the source of exposure.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationExposuresource
 */
export const ParticipationExposuresourceCode = {
  /**
   * ExposureSource
   */
  EXSRC: "EXSRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationExposuresourceCode =
  typeof ParticipationExposuresourceCode[keyof typeof ParticipationExposuresourceCode];
