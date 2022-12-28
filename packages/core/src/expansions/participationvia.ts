/**
 * For services, an intermediate location that specifies a path between origin an destination.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationVia
 */
export const ParticipationViaCode = {
  /**
   * via
   */
  VIA: "VIA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationViaCode =
  typeof ParticipationViaCode[keyof typeof ParticipationViaCode];
