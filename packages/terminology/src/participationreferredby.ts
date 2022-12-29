/**
 * A participant (e.g. provider) who has referred the subject of an act (e.g. patient).

Typically, a referred by participant will provide a report (e.g. referral).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationReferredBy
 */
export const ParticipationReferredByCode = {
  /**
   * Referred By
   */
  ReferredBy: "REFB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationReferredByCode =
  typeof ParticipationReferredByCode[keyof typeof ParticipationReferredByCode];
