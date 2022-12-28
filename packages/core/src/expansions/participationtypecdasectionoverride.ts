/**
 * Identifies the set of participation types context that can be blocked (overridden) at the CDA section or sub-section level of a document.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationTypeCDASectionOverride
 */
export const ParticipationTypeCDASectionOverrideCode = {
  /**
   * author (originator)
   */
  AUT: "AUT",

  /**
   * authenticator
   */
  AUTHEN: "AUTHEN",

  /**
   * informant
   */
  INF: "INF",

  /**
   * subject
   */
  SBJ: "SBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTypeCDASectionOverrideCode =
  typeof ParticipationTypeCDASectionOverrideCode[keyof typeof ParticipationTypeCDASectionOverrideCode];
