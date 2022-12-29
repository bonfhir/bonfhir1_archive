/**
 * The person (or organization) who receives the product of an Act.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationReceiver
 */
export const ParticipationReceiverCode = {
  /**
   * receiver
   */
  receiver: "RCV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationReceiverCode =
  typeof ParticipationReceiverCode[keyof typeof ParticipationReceiverCode];
