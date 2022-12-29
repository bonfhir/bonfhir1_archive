/**
 * Used to represent participant(s) who should receive a copy of a document.
 * http://terminology.hl7.org/ValueSet/v3-xInformationRecipient
 */
export const XInformationRecipientCode = {
  /**
   * primary information recipient
   */
  primaryinformationrecipient: "PRCP",

  /**
   * tracker
   */
  tracker: "TRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XInformationRecipientCode =
  typeof XInformationRecipientCode[keyof typeof XInformationRecipientCode];
