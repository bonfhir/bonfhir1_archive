/**
 * Identifies the primary means by which an Entity participates in an Act.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationMode
 */
export const ParticipationModeCode = {
  /**
   * physical presence
   */
  physicalpresence: "PHYSICAL",

  /**
   * remote presence
   */
  remotepresence: "REMOTE",

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

  /**
   * written
   */
  written: "WRITTEN",

  /**
   * telefax
   */
  telefax: "FAXWRIT",

  /**
   * handwritten
   */
  handwritten: "HANDWRIT",

  /**
   * mail
   */
  mail: "MAILWRIT",

  /**
   * online written
   */
  onlinewritten: "ONLINEWRIT",

  /**
   * email
   */
  email: "EMAILWRIT",

  /**
   * typewritten
   */
  typewritten: "TYPEWRIT",

  /**
   * messaging
   */
  messaging: "MSGWRIT",

  /**
   * SMS message
   */
  SMSmessage: "SMSWRIT",

  /**
   * MMS message
   */
  MMSmessage: "MMSWRIT",

  /**
   * messaging app
   */
  messagingapp: "APPWRIT",

  /**
   * electronic data
   */
  electronicdata: "ELECTRONIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeCode =
  typeof ParticipationModeCode[keyof typeof ParticipationModeCode];
