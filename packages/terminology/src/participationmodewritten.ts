/**
 * Participation by human language recorded on a physical material
 * http://terminology.hl7.org/ValueSet/v3-ParticipationModeWritten
 */
export const ParticipationModeWrittenCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeWrittenCode =
  typeof ParticipationModeWrittenCode[keyof typeof ParticipationModeWrittenCode];
