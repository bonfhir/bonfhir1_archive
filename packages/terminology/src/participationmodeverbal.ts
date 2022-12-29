/**
 * Participation by voice communication
 * http://terminology.hl7.org/ValueSet/v3-ParticipationModeVerbal
 */
export const ParticipationModeVerbalCode = {
  /**
   * verbal
   */
  verbal: "VERBAL",

  /**
   * dictated
   */
  dictated: "DICTATE",

  /**
   * face-to-face
   */
  facetoface: "FACE",

  /**
   * telephone
   */
  telephone: "PHONE",

  /**
   * videoconferencing
   */
  videoconferencing: "VIDEOCONF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeVerbalCode =
  typeof ParticipationModeVerbalCode[keyof typeof ParticipationModeVerbalCode];
