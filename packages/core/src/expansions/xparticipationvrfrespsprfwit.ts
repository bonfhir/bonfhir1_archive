/**
 * One who oversees a control act event. Includes either a type of accountability, as in responsible party, verifier (and its children) and witness; or being an assistant to the control act event, as in secondary performer.
 * http://terminology.hl7.org/ValueSet/v3-xParticipationVrfRespSprfWit
 */
export const XParticipationVrfRespSprfWitCode = {
  /**
   * responsible party
   */
  RESP: "RESP",

  /**
   * secondary performer
   */
  SPRF: "SPRF",

  /**
   * verifier
   */
  VRF: "VRF",

  /**
   * witness
   */
  WIT: "WIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XParticipationVrfRespSprfWitCode =
  typeof XParticipationVrfRespSprfWitCode[keyof typeof XParticipationVrfRespSprfWitCode];
