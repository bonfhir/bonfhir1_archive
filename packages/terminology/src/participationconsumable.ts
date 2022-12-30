/**
 * Target that is taken up, is diminished, and disappears in the service.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationConsumable
 */
export const ParticipationConsumableCode = {
  /**
   * consumable
   */
  CSM: "CSM",

  /**
   * therapeutic agent
   */
  TPA: "TPA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationConsumableCode =
  typeof ParticipationConsumableCode[keyof typeof ParticipationConsumableCode];
