/**
 * One who initiates the control act event, either as its author or its physical performer.
 * http://terminology.hl7.org/ValueSet/v3-xParticipationAuthorPerformer
 */
export const XParticipationAuthorPerformerCode = {
  /**
   * author (originator)
   */
  AUT: "AUT",

  /**
   * performer
   */
  PRF: "PRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XParticipationAuthorPerformerCode =
  typeof XParticipationAuthorPerformerCode[keyof typeof XParticipationAuthorPerformerCode];
