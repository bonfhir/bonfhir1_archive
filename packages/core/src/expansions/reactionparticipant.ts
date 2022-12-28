/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ReactionParticipant
 */
export const ReactionParticipantCode = {
  /**
   * catalyst
   */
  CAT: "CAT",

  /**
   * consumable
   */
  CSM: "CSM",

  /**
   * product
   */
  PRD: "PRD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReactionParticipantCode =
  typeof ReactionParticipantCode[keyof typeof ReactionParticipantCode];
