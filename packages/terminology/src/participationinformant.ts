/**
 * A source of reported information (e.g., a next of kin who answers questions about the patient's history). For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationInformant
 */
export const ParticipationInformantCode = {
  /**
   * informant
   */
  informant: "INF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationInformantCode =
  typeof ParticipationInformantCode[keyof typeof ParticipationInformantCode];
