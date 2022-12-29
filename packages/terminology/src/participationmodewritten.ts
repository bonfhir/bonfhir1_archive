/**
 * Participation by human language recorded on a physical material
 * http://terminology.hl7.org/ValueSet/v3-ParticipationModeWritten
 */
export const ParticipationModeWrittenCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeWrittenCode =
  typeof ParticipationModeWrittenCode[keyof typeof ParticipationModeWrittenCode];
