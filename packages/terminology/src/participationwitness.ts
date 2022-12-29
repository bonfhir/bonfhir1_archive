/**
 * Only with service events. A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationWitness
 */
export const ParticipationWitnessCode = {
  /**
   * witness
   */
  witness: "WIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationWitnessCode =
  typeof ParticipationWitnessCode[keyof typeof ParticipationWitnessCode];
