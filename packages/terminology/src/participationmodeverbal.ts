/**
 * Participation by voice communication
 * http://terminology.hl7.org/ValueSet/v3-ParticipationModeVerbal
 */
export const ParticipationModeVerbalCode = {
  /**
   * verbal
   */
  VERBAL: "VERBAL",

  /**
   * dictated
   */
  DICTATE: "DICTATE",

  /**
   * face-to-face
   */
  FACE: "FACE",

  /**
   * telephone
   */
  PHONE: "PHONE",

  /**
   * videoconferencing
   */
  VIDEOCONF: "VIDEOCONF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeVerbalCode =
  typeof ParticipationModeVerbalCode[keyof typeof ParticipationModeVerbalCode];
