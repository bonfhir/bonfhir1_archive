/**
 * In some organ transplantation services and rarely in transfusion services a donor will be a target participant in the service. However, in most cases transplantation is decomposed in three services: explantation, transport, and implantation. The identity of the donor (recipient) is often irrelevant for the explantation (implantation) service.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationDonor
 */
export const ParticipationDonorCode = {
  /**
   * donor
   */
  DON: "DON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationDonorCode =
  typeof ParticipationDonorCode[keyof typeof ParticipationDonorCode];
