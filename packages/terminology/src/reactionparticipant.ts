/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ReactionParticipant
 */
export const ReactionParticipantCode = {
  /**
   * catalyst
   */
  catalyst: "CAT",

  /**
   * consumable
   */
  consumable: "CSM",

  /**
   * product
   */
  product: "PRD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReactionParticipantCode =
  typeof ReactionParticipantCode[keyof typeof ReactionParticipantCode];
