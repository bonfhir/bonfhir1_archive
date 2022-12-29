/**
 * **Description:**Direct participation in an exposure act where it is unknown that the participant is the source or subject of the exposure. If the participant is known to be the contact of an exposure then the EXPTRGT participation type should be used. If the participant is known to be the source then the EXSRC participation type should be used.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationExposureparticipation
 */
export const ParticipationExposureparticipationCode = {
  /**
   * ExposureParticipation
   */
  ExposureParticipation: "EXPART",

  /**
   * ExposureTarget
   */
  ExposureTarget: "EXPTRGT",

  /**
   * ExposureSource
   */
  ExposureSource: "EXSRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationExposureparticipationCode =
  typeof ParticipationExposureparticipationCode[keyof typeof ParticipationExposureparticipationCode];
