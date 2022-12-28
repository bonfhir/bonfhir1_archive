/**
 * In an obstetric service, the baby.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationBaby
 */
export const ParticipationBabyCode = {
  /**
   * baby
   */
  BBY: "BBY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationBabyCode =
  typeof ParticipationBabyCode[keyof typeof ParticipationBabyCode];
