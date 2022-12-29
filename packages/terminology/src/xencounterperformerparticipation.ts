/**
 * Used to enumerate the ways in which a clinician can directly participate during an encounter which generates a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xEncounterPerformerParticipation
 */
export const XEncounterPerformerParticipationCode = {
  /**
   * consultant
   */
  consultant: "CON",

  /**
   * performer
   */
  performer: "PRF",

  /**
   * secondary performer
   */
  secondaryperformer: "SPRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XEncounterPerformerParticipationCode =
  typeof XEncounterPerformerParticipationCode[keyof typeof XEncounterPerformerParticipationCode];
