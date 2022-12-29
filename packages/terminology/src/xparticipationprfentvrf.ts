/**
 * A person that performed, contributed in recording or validating the act.
 * http://terminology.hl7.org/ValueSet/v3-xParticipationPrfEntVrf
 */
export const XParticipationPrfEntVrfCode = {
  /**
   * data entry person
   */
  dataentryperson: "ENT",

  /**
   * performer
   */
  performer: "PRF",

  /**
   * verifier
   */
  verifier: "VRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XParticipationPrfEntVrfCode =
  typeof XParticipationPrfEntVrfCode[keyof typeof XParticipationPrfEntVrfCode];
