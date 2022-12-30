/**
 * The person who receives the patient
 * http://terminology.hl7.org/ValueSet/v3-ParticipationReferredTo
 */
export const ParticipationReferredToCode = {
  /**
   * Referred to
   */
  REFT: "REFT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationReferredToCode =
  typeof ParticipationReferredToCode[keyof typeof ParticipationReferredToCode];
