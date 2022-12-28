/**
 * Only with Transportation services. A person who escorts the patient.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationEscort
 */
export const ParticipationEscortCode = {
  /**
   * escort
   */
  ESC: "ESC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationEscortCode =
  typeof ParticipationEscortCode[keyof typeof ParticipationEscortCode];
