/**
 * A party, who may or should receive or who has recieved the Act or subsequent or derivative information of that Act. Information recipient is inert, i.e., independent of mood." Rationale: this is a generalization of a too diverse family that the definition can't be any more specific, and the concept is abstract so one of the specializations should be used.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationInformationRecipient
 */
export const ParticipationInformationRecipientCode = {
  /**
   * information recipient
   */
  IRCP: "IRCP",

  /**
   * ugent notification contact
   */
  NOT: "NOT",

  /**
   * primary information recipient
   */
  PRCP: "PRCP",

  /**
   * Referred By
   */
  REFB: "REFB",

  /**
   * Referred to
   */
  REFT: "REFT",

  /**
   * tracker
   */
  TRC: "TRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationInformationRecipientCode =
  typeof ParticipationInformationRecipientCode[keyof typeof ParticipationInformationRecipientCode];
