/**
 * A person having referred the subject of the service to the performer (referring physician). Typically, a referring physician will receive a report.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationReferrer
 */
export const ParticipationReferrerCode = {
  /**
   * referrer
   */
  REF: "REF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationReferrerCode =
  typeof ParticipationReferrerCode[keyof typeof ParticipationReferrerCode];
