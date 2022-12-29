/**
 * A person that contributed to recording or validating the act.
 * http://terminology.hl7.org/ValueSet/v3-xParticipationEntVrf
 */
export const XParticipationEntVrfCode = {
  /**
   * data entry person
   */
  dataentryperson: "ENT",

  /**
   * verifier
   */
  verifier: "VRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XParticipationEntVrfCode =
  typeof XParticipationEntVrfCode[keyof typeof XParticipationEntVrfCode];
