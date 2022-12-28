/**
 * Identifies the primary means by which an Entity participates in an Act.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationMode
 */
export const ParticipationModeCode = {
  /**
   * physical presence
   */
  PHYSICAL: "PHYSICAL",

  /**
   * remote presence
   */
  REMOTE: "REMOTE",

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

  /**
   * written
   */
  WRITTEN: "WRITTEN",

  /**
   * telefax
   */
  FAXWRIT: "FAXWRIT",

  /**
   * handwritten
   */
  HANDWRIT: "HANDWRIT",

  /**
   * mail
   */
  MAILWRIT: "MAILWRIT",

  /**
   * online written
   */
  ONLINEWRIT: "ONLINEWRIT",

  /**
   * email
   */
  EMAILWRIT: "EMAILWRIT",

  /**
   * typewritten
   */
  TYPEWRIT: "TYPEWRIT",

  /**
   * messaging
   */
  MSGWRIT: "MSGWRIT",

  /**
   * SMS message
   */
  SMSWRIT: "SMSWRIT",

  /**
   * MMS message
   */
  MMSWRIT: "MMSWRIT",

  /**
   * messaging app
   */
  APPWRIT: "APPWRIT",

  /**
   * electronic data
   */
  ELECTRONIC: "ELECTRONIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeCode =
  typeof ParticipationModeCode[keyof typeof ParticipationModeCode];
