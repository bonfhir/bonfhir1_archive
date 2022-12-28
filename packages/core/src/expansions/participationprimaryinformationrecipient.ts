/**
 * Information recipient to whom an act statement is primarily directed. E.g., a primary care provider receiving a discharge letter from a hospitalist, a health department receiving information on a suspected case of infectious disease. Multiple of these participations may exist on the same act without requiring that recipients be ranked as primary vs. secondary.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationPrimaryInformationRecipient
 */
export const ParticipationPrimaryInformationRecipientCode = {
  /**
   * primary information recipient
   */
  PRCP: "PRCP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationPrimaryInformationRecipientCode =
  typeof ParticipationPrimaryInformationRecipientCode[keyof typeof ParticipationPrimaryInformationRecipientCode];
