/**
 * **Description:** Concepts that define the telecommunication capabilities of a particular device. Used to identify the expected capabilities to be found at a particular telecommunication address.
 * http://terminology.hl7.org/ValueSet/v3-TelecommunicationCapabilities
 */
export const TelecommunicationCapabilitiesCode = {
  /**
   * data
   */
  data: "data",

  /**
   * fax
   */
  fax: "fax",

  /**
   * sms
   */
  sms: "sms",

  /**
   * text
   */
  tty: "tty",

  /**
   * voice
   */
  voice: "voice",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TelecommunicationCapabilitiesCode =
  typeof TelecommunicationCapabilitiesCode[keyof typeof TelecommunicationCapabilitiesCode];
