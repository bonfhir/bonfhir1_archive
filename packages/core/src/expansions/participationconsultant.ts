/**
 * An advisor participating in the service by performing evaluations and making recommendations.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationConsultant
 */
export const ParticipationConsultantCode = {
  /**
   * consultant
   */
  CON: "CON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationConsultantCode =
  typeof ParticipationConsultantCode[keyof typeof ParticipationConsultantCode];
