/**
 * **Description:** The entity playing the associated role is the physical (including energy), chemical or biological substance that is participating in the exposure. For example in communicable diseases, the associated playing entity is the disease causing pathogen.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationExposureagent
 */
export const ParticipationExposureagentCode = {
  /**
   * ExposureAgent
   */
  EXPAGNT: "EXPAGNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationExposureagentCode =
  typeof ParticipationExposureagentCode[keyof typeof ParticipationExposureagentCode];
